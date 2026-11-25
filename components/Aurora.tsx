"use client";

import { useEffect, useRef } from "react";

const FRAG = `precision highp float;uniform float t;uniform vec2 r;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n(p);p*=2.;a*=.5;}return v;}
void main(){vec2 p=(gl_FragCoord.xy-.5*r)/r.y;vec2 q=vec2(fbm(p+t*.05),fbm(p+vec2(5.2,1.3)-t*.04));float f=fbm(p*1.4+3.*q);
vec3 bg=vec3(.02,.031,.227),a=vec3(.13,.26,.72),b=vec3(.894,.141,.424);
vec3 c=mix(bg,a,smoothstep(.2,.9,f));c=mix(c,b,smoothstep(.55,1.,length(q)*f)*.8);gl_FragColor=vec4(c,1.);}`;
const VERT = "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}";

/** Slow liquid gradient in the brand colours, drawn with WebGL. Pauses off screen. */
export default function Aurora() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const gl = canvas?.getContext("webgl", { antialias: false });
    if (!canvas || !gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const uT = gl.getUniformLocation(prog, "t");
    const uR = gl.getUniformLocation(prog, "r");

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let visible = false;
    const draw = (ms: number) => {
      const w = Math.max(1, Math.round(canvas.clientWidth * 0.5));
      const hgt = Math.max(1, Math.round(canvas.clientHeight * 0.5));
      if (canvas.width !== w || canvas.height !== hgt) {
        canvas.width = w;
        canvas.height = hgt;
        gl.viewport(0, 0, w, hgt);
      }
      gl.uniform1f(uT, still ? 12 : ms / 1000);
      gl.uniform2f(uR, w, hgt);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (visible && !still) raf = requestAnimationFrame(draw);
    };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(draw);
    });
    io.observe(canvas);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas className="fx" ref={ref} aria-hidden="true" />;
}
