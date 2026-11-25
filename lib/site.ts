// All copy and specifications below come from friendship.co.ke unless marked otherwise.

export const company = {
  name: "Friendship Container Manufacturers Ltd",
  short: "FCML",
  tagline: "A leading name in the packaging industry.",
  since: 1978,
  mission:
    "To provide customers with products and services that meets their expectations in terms of quality and timely delivery.",
  phones: ["+254 20 6996000", "+254 20 2336996", "+254 20 2636530"],
  mobiles: ["+254 722 206990", "0733 333012"],
  fax: "+254 (020) 6996204",
  emails: ["sales@friendship.co.ke", "info@friendship.co.ke"],
  address: "Plot No. L3-38, Tatu City, Ruiru, Kiambu County",
  directions: "Use Exit 11 from Thika Highway, after Clayworks.",
  pobox: "P.O. Box 42785 / 48158 – 00100, Nairobi, Kenya",
};

export const nav = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/quality", label: "Quality" },
  { href: "/employment", label: "Employment" },
];

export const categories = ["Cans", "Plastics", "Closures", "Miscellaneous"] as const;
export type Category = (typeof categories)[number];

export type Product = {
  slug: string;
  category: Category;
  name: string;
  /** file in /public/img, a 635x300 spec sheet from the original site */
  img: string;
  /** photo region inside that sheet: x, y, width, height */
  crop: [number, number, number, number];
  desc: string;
  sizeLabel: string;
  sizes: string[];
  extraLabel?: string;
  extra?: string[];
  notes: string[];
};

export const products: Product[] = [
  {
    slug: "cylindrical-cans",
    category: "Cans",
    name: "Cylindrical cans",
    img: "product_cylcans.jpg",
    crop: [135, 50, 215, 235],
    desc: "Various combinations of closures, ends and handles. Interior lacquering can also be done.",
    sizeLabel: "Diameters",
    sizes: ["202", "211", "300", "307", "401", "410", "603", "700"],
    extraLabel: "Closures and accessories",
    extra: [
      "Plain lids, lacquered lids, decorated lids, minted lids",
      "Ring/lid/tagger seamed with end supplied",
      "Easy open end",
      "Plastic closure tops, screw cap tops",
      "Slip lids",
      "Plastic handles, plastic closures, screw caps",
    ],
    notes: [
      "Diameters are in imperial units",
      "Heights can vary as per customer requirements",
      "Various combinations of closures, ends and handles available",
      "All types of exterior decoration and coatings possible",
      "Interior lacquering can also be done",
    ],
  },
  {
    slug: "sanitary-cans",
    category: "Cans",
    name: "Sanitary cans",
    img: "product_sancans.jpg",
    crop: [100, 62, 320, 185],
    desc: "Beaded or non-beaded. Heights can vary as per customer requirements.",
    sizeLabel: "Diameters",
    sizes: ["300", "401"],
    extraLabel: "Closures",
    extra: ["Easy open ends"],
    notes: [
      "Beaded or non-beaded",
      "Diameters are in imperial units",
      "Heights can vary as per customer requirements",
    ],
  },
  {
    slug: "rectangular-cans",
    category: "Cans",
    name: "Rectangular cans",
    img: "product_rectcans.jpg",
    crop: [122, 12, 228, 150],
    desc: "Various combinations of closures, ends and handles. Interior lacquering can also be done.",
    sizeLabel: "Sizes",
    sizes: [
      "300×202×178", "300×202×209", "300×202×412", "700×406×900", "700×406×1104", "906×906×307",
      "906×906×709", "906×906×804", "906×906×908", "906×906×1003", "906×906×1313", "906×906×1414",
    ],
    extraLabel: "Closures and fittings",
    extra: ["T-type lids", "Plastic closure tops", "Metal handles"],
    notes: [
      "Heights can vary as per customer requirements",
      "Dimensions are in imperial units",
      "Various combinations of closures, ends and handles available",
      "All types of exterior decoration and coatings possible",
      "Interior lacquering can also be done",
    ],
  },
  {
    slug: "pails-and-drums",
    category: "Cans",
    name: "Pails and drums",
    img: "product_pail.jpg",
    crop: [135, 10, 240, 195],
    desc: "Various combinations of closures, ends and handles. All types of exterior decoration and coatings.",
    sizeLabel: "Capacities",
    sizes: ["15 L", "18 L", "20 L"],
    extraLabel: "Closures and fittings",
    extra: ["Pail covers", "Drum tops", "Plastic closure tops", "Screw cap tops", "Metal handles"],
    notes: [
      "Various combinations of closures, ends and handles available",
      "All types of exterior decoration and coatings possible",
    ],
  },
  {
    slug: "seamless-and-brilliantine",
    category: "Cans",
    name: "Seamless and brilliantine",
    img: "product_seambrill.jpg",
    crop: [100, 10, 268, 240],
    desc: "Seamless and brilliantine tins, including oval shapes.",
    sizeLabel: "Sizes",
    sizes: ["4 g", "6 g", "7 g", "40 ml", "50 g", "51 g", "Oval shape"],
    notes: [],
  },
  {
    slug: "household-plastics",
    category: "Plastics",
    name: "Household plastics",
    img: "product_plasthse.jpg",
    crop: [168, 142, 146, 120],
    desc: "Plastic ware for the home.",
    sizeLabel: "Range",
    sizes: ["Buckets", "Jugs", "Bowls", "Plates", "Cups", "Flower pots", "Glass", "Bath stool", "Hand fan"],
    notes: [],
  },
  {
    slug: "industrial-plastics",
    category: "Plastics",
    name: "Industrial plastics",
    img: "product_plastindustl.jpg",
    crop: [145, 10, 135, 145],
    desc: "All types of decoration and coatings possible. Choice of metal or plastic handles.",
    sizeLabel: "Range",
    sizes: ["20 litre buckets", "4 litre buckets", "Composite buckets", "50 mm plastic caps"],
    notes: ["All types of decoration and coatings possible", "Choice of metal or plastic handles"],
  },
  {
    slug: "ropp-closures",
    category: "Closures",
    name: "ROPP closures",
    img: "product_ropp.jpg",
    crop: [115, 10, 170, 110],
    desc: "Roll-On-Pilfer-Proof caps. Heights are standard; deep draw also available.",
    sizeLabel: "Diameters",
    sizes: ["20 mm", "22 mm", "25 mm", "28 mm", "29/35 mm", "31.5 mm", "20 mm tear-off seals", "25 mm flanged cap"],
    extraLabel: "Accessories",
    extra: ["E.P.E. liners"],
    notes: [
      "Heights of caps are standard",
      "Deep draw also available",
      "All types of decoration and coatings possible",
    ],
  },
  {
    slug: "screw-caps",
    category: "Closures",
    name: "Screw caps",
    img: "product_scrwcaps.jpg",
    crop: [122, 12, 210, 150],
    desc: "All sizes, standard and non-standard. All types of decoration and coatings possible.",
    sizeLabel: "Diameters",
    sizes: ["18 mm", "20 mm", "22 mm", "35 mm", "37 mm", "38 mm", "43 mm", "48 mm", "50 mm", "52 mm", "54 mm", "56 mm", "70 mm"],
    extraLabel: "Accessories",
    extra: ["E.P.E. liners"],
    notes: ["All sizes, standard and non-standard", "All types of decoration and coatings possible"],
  },
  {
    slug: "stationery",
    category: "Miscellaneous",
    name: "Stationery",
    img: "product_stationery.jpg",
    crop: [145, 20, 150, 120],
    desc: "Metal fittings for files and calendars.",
    sizeLabel: "Range",
    sizes: ["Calendar rims", "Spring file clips", "Box file side rims", "Box file rings", "Spring file fittings", "Electrical clips"],
    notes: [],
  },
  {
    slug: "household-miscellaneous",
    category: "Miscellaneous",
    name: "Household",
    img: "product_plasthse.jpg",
    crop: [170, 15, 140, 115],
    desc: "Household items from the miscellaneous range.",
    sizeLabel: "Range",
    sizes: ["Buckets", "Jugs", "Bowls", "Plates", "Cups", "Flower pots", "Glass", "Bath stool", "Hand fan"],
    notes: [],
  },
  {
    slug: "advertising",
    category: "Miscellaneous",
    name: "Advertising",
    img: "product_advert.jpg",
    crop: [85, 10, 280, 185],
    desc: "Advertising materials. All sizes, standard and non-standard.",
    sizeLabel: "Range",
    sizes: ["Badges", "Posters", "Trays", "Coasters", "Hot pads"],
    notes: ["All sizes, standard and non-standard", "All types of decoration and coatings possible"],
  },
];

export const uses = [
  "Oil, water and solvent based paints and chemicals",
  "Solvents, white spirits, thinners and hardeners",
  "PVC cement, glue, adhesives, stucco and putty",
  "Lube oil, hydraulic and brake oil",
  "Edible oil, sunflower oil, soya oil, corn oil",
  "Powdered foods, agroseeds, processed foods, biscuits, ghee",
  "Pharmaceutical and beverage closures",
  "Cosmetics",
  "General household use",
  "Spring files and box files",
  "Advertising",
];

export const steps: { name: string; icon: "design" | "printing" | "assembling" | "delivery"; text: string }[] = [
  { name: "Design", icon: "design", text: "Shape, size, closure and artwork are settled first." },
  { name: "Printing", icon: "printing", text: "Exterior decoration, coatings and interior lacquering." },
  { name: "Assembling", icon: "assembling", text: "Containers are made up and fitted with their lids and closures." },
  { name: "Delivery", icon: "delivery", text: "The finished order is delivered to you on time." },
];

export const qualityPoints = [
  { title: "Customer needs", text: "Realizing the importance of meeting customer needs" },
  { title: "Quality policy", text: "Establishing the quality policy and the quality objectives" },
  { title: "Review meetings", text: "Conducting review meetings and ensuring that raw materials are available" },
  { title: "TQM and Kaizen", text: "Total Quality Management and Kaizen, the proven approaches to manufacturing, are being practiced" },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

/** One plain sentence per product for the cards. Written for this site from the specifications above. */
export const summaries: Record<string, string> = {
  "cylindrical-cans": "Eight diameters, from 202 to 700, with heights made to suit you.",
  "sanitary-cans": "Two diameters, 300 and 401, beaded or non-beaded.",
  "rectangular-cans": "Twelve sizes, from 300×202×178 up to 906×906×1414.",
  "pails-and-drums": "15, 18 and 20 litre, with covers, tops and handles to match.",
  "seamless-and-brilliantine": "Small tins from 4 g to 51 g, round or oval.",
  "household-plastics": "Buckets, jugs, bowls, plates, cups and more for the home.",
  "industrial-plastics": "4 and 20 litre buckets, composite buckets and 50 mm caps.",
  "ropp-closures": "Roll-on pilfer-proof caps from 20 mm to 31.5 mm.",
  "screw-caps": "Thirteen diameters, from 18 mm to 70 mm.",
  "stationery": "Clips, rings and rims for files and calendars.",
  "household-miscellaneous": "Jugs, cups, bowls and other everyday pieces.",
  "advertising": "Badges, posters, trays, coasters and hot pads.",
};
