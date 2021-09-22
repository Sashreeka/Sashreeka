import { StyleSheet } from "react-native";

const PRODUCTS = [
  {
    arrivalTime: "21 Aug 2021",
    caption: "contains high amount of phosphate minerals. It is ",
    id: 1,
    measurementUnit: "kg",
    name: "Rock Phospate",
    offer: 0,
    photo:
      "https://res.cloudinary.com/do1sv3tbt/image/upload/v1632090125/fertilizerproducts/r7oxluq9xxdofn2ayxkl.png",
    price: 3790,
    reOrderLevel: 10,
    stock: 30,
    unitPrice: 3790,
    unitWeight: 9,
  },
  {
    arrivalTime: "20 Aug 2021",
    caption: "mixture of decomposing food waste.",
    id: 2,
    measurementUnit: "kg",
    name: "Vermicompost",
    offer: 5,
    photo:
      "https://res.cloudinary.com/do1sv3tbt/image/upload/v1631977315/fertilizerproducts/bovqulams9zena7l5kqp.jpg",
    price: 1463,
    reOrderLevel: 15,
    stock: 50,
    unitPrice: 1540,
    unitWeight: 5,
  },
  {
    arrivalTime: "20 Aug 2021",
    caption: "made from animal excreta(cow dung & goat droppings",
    id: 3,
    measurementUnit: "kg",
    name: "Manure",
    offer: 5,
    photo:
      "https://res.cloudinary.com/do1sv3tbt/image/upload/v1631977403/fertilizerproducts/djaufefy7mhajetibcff.jpg",
    price: 950,
    reOrderLevel: 10,
    stock: 45,
    unitPrice: 1000,
    unitWeight: 5,
  },
  {
    arrivalTime: "18 Aug 2021",
    caption: "consists of chicken manure and sawdust",
    id: 4,
    measurementUnit: "kg",
    name: "Chicken Litter",
    offer: 0,
    photo:
      "https://res.cloudinary.com/do1sv3tbt/image/upload/v1631977488/fertilizerproducts/vplsqvhsd03mj5o6u4nu.jpg",
    price: 1500,
    reOrderLevel: 5,
    stock: 25,
    unitPrice: 1500,
    unitWeight: 5,
  },
  {
    arrivalTime: "18 Aug 2021",
    caption: "Fertilizer from seaweed",
    id: 5,
    measurementUnit: "L",
    name: "Liter Seaweed",
    offer: 5,
    photo:
      "https://res.cloudinary.com/do1sv3tbt/image/upload/v1631977541/fertilizerproducts/piteunccwns7b53u1zdm.jpg",
    price: 2898,
    reOrderLevel: 5,
    stock: 20,
    unitPrice: 3050,
    unitWeight: 4,
  },
  {
    arrivalTime: "17 Aug 2021",
    caption: "stimulates blooming on flowering plants",
    id: 6,
    measurementUnit: "L",
    name: "MorBloom",
    offer: 10,
    photo:
      "https://res.cloudinary.com/do1sv3tbt/image/upload/v1631977688/fertilizerproducts/tqnuwagx9reylylkoghy.jpg",
    price: 4491,
    reOrderLevel: 5,
    stock: 20,
    unitPrice: 4990,
    unitWeight: 10,
  },
  {
    arrivalTime: "12 Aug 2021",
    caption: "nitrogen fixing, plant disease controlling bacteri",
    id: 7,
    measurementUnit: "L",
    name: "Bio Gold",
    offer: 5,
    photo:
      "https://res.cloudinary.com/do1sv3tbt/image/upload/v1632089671/fertilizerproducts/ajky5cdeub0y9gmpoqpr.jpg",
    price: 2545,
    reOrderLevel: 15,
    stock: 50,
    unitPrice: 2679,
    unitWeight: 4,
  },
  {
    arrivalTime: "18 Aug 2021",
    caption: "helps to prevent the plant from rot & wilt disease",
    id: 8,
    measurementUnit: "L",
    name: "Bio Vaccine",
    offer: 10,
    photo:
      "https://res.cloudinary.com/do1sv3tbt/image/upload/v1632089671/fertilizerproducts/j5twmceafnaubolye0sa.jpg",
    price: 2502,
    reOrderLevel: 6,
    stock: 40,
    unitPrice: 2780,
    unitWeight: 4,
  },
  {
    arrivalTime: "12 Aug 2021",
    caption: "formulation containing phosphorous",
    id: 9,
    measurementUnit: "kg",
    name: "Bio Vermi Compost",
    offer: 5,
    photo:
      "https://res.cloudinary.com/do1sv3tbt/image/upload/v1632089670/fertilizerproducts/dd9m7grezhqy9pmnpjrw.jpg",
    price: 2536,
    reOrderLevel: 5,
    stock: 30,
    unitPrice: 2670,
    unitWeight: 4,
  },
  {
    arrivalTime: "20 Sep 2021",
    caption: "Roasted rice bulk enrich with silicon.",
    id: 10,
    measurementUnit: "kg",
    name: "Black rice",
    offer: 0,
    photo:
      "https://res.cloudinary.com/do1sv3tbt/image/upload/v1632089670/fertilizerproducts/bjrupnrnwz1xw2hnf42x.png",
    price: 300,
    reOrderLevel: 30,
    stock: 600,
    unitPrice: 300,
    unitWeight: 10,
  },
  {
    arrivalTime: "20 Sep 2021",
    caption: "Rich nutritional manure with soil worms.",
    id: 11,
    measurementUnit: "kg",
    name: "SL vermicompost",
    offer: 50,
    photo:
      "https://res.cloudinary.com/do1sv3tbt/image/upload/v1632089668/fertilizerproducts/ofwgzk1uy9kyfk0gbcre.png",
    price: 300,
    reOrderLevel: 30,
    stock: 500,
    unitPrice: 600,
    unitWeight: 15,
  },
  {
    arrivalTime: "20 Sep 2021",
    caption: "Compost rich with nitrogen and potassium",
    id: 12,
    measurementUnit: "kg",
    name: "SL Compost",
    offer: 20,
    photo:
      "https://res.cloudinary.com/do1sv3tbt/image/upload/v1632089668/fertilizerproducts/h55ty6chzoif9yscunvt.png",
    price: 1200,
    reOrderLevel: 40,
    stock: 423,
    unitPrice: 1500,
    unitWeight: 20,
  },
  {
    arrivalTime: "20 Sep 2021",
    caption: "Bio charcoal is good for cure soil.",
    id: 13,
    measurementUnit: "kg",
    name: "Biochar",
    offer: 0,
    photo:
      "https://res.cloudinary.com/do1sv3tbt/image/upload/v1632089668/fertilizerproducts/zuacwtyq40wirtpswoqz.png",
    price: 950,
    reOrderLevel: 10,
    stock: 590,
    unitPrice: 950,
    unitWeight: 5,
  },
  {
    arrivalTime: "20 Sep 2021",
    caption: "Organic weed controller.",
    id: 14,
    measurementUnit: "kg",
    name: "Sunflower manure",
    offer: 5,
    photo:
      "https://res.cloudinary.com/do1sv3tbt/image/upload/v1632089668/fertilizerproducts/vmd0caugn88kimtjmwpl.png",
    price: 1188,
    reOrderLevel: 20,
    stock: 321,
    unitPrice: 1250,
    unitWeight: 10,
  },
  {
    arrivalTime: "20 Sep 2021",
    caption: "Long term soil remedy ",
    id: 15,
    measurementUnit: "kg",
    name: "Animal manure",
    offer: 50,
    photo:
      "https://res.cloudinary.com/do1sv3tbt/image/upload/v1632089668/fertilizerproducts/tapkmmxaoaxdwvo29q2a.png",
    price: 600,
    reOrderLevel: 20,
    stock: 100,
    unitPrice: 1200,
    unitWeight: 10,
  },
  {
    arrivalTime: "20 Sep 2021",
    caption: "Compost for industrial farmlands",
    id: 16,
    measurementUnit: "kg",
    name: "Max compost",
    offer: 10,
    photo:
      "https://res.cloudinary.com/do1sv3tbt/image/upload/v1632089671/fertilizerproducts/pj6eyqjgtiymgvvi2cv6.jpg",
    price: 2286,
    reOrderLevel: 50,
    stock: 1500,
    unitPrice: 2540,
    unitWeight: 25,
  },
  {
    arrivalTime: "20 Sep 2021",
    caption: "Pot Soil for plant houses",
    id: 17,
    measurementUnit: "kg",
    name: "Jambo soil",
    offer: 5,
    photo:
      "https://res.cloudinary.com/do1sv3tbt/image/upload/v1632089670/fertilizerproducts/yfywbvxikpa1rz45aemi.jpg",
    price: 2042,
    reOrderLevel: 15,
    stock: 945,
    unitPrice: 2150,
    unitWeight: 25,
  },
  {
    arrivalTime: "20 Sep 2021",
    caption: "Compost for plant growth",
    id: 18,
    measurementUnit: "kg",
    name: "Compost15",
    offer: 25,
    photo:
      "https://res.cloudinary.com/do1sv3tbt/image/upload/v1632089670/fertilizerproducts/jzior9nqmnkm7pq8w8et.jpg",
    price: 150,
    reOrderLevel: 40,
    stock: 2100,
    unitPrice: 200,
    unitWeight: 15,
  },
  {
    arrivalTime: "20 Sep 2021",
    caption: "Best quality vermicompost",
    id: 19,
    measurementUnit: "kg",
    name: "Richvermi",
    offer: 0,
    photo:
      "https://res.cloudinary.com/do1sv3tbt/image/upload/v1632089670/fertilizerproducts/hvfd2x4lzozolzhvewdr.jpg",
    price: 450,
    reOrderLevel: 20,
    stock: 540,
    unitPrice: 450,
    unitWeight: 10,
  },
  {
    arrivalTime: "20 Sep 2021",
    caption: "Best quality compost",
    id: 20,
    measurementUnit: "kg",
    name: "LK Compost",
    offer: 10,
    photo:
      "https://res.cloudinary.com/do1sv3tbt/image/upload/v1632089670/fertilizerproducts/ntspqiijmby2hpvfvrbx.jpg",
    price: 1080,
    reOrderLevel: 20,
    stock: 358,
    unitPrice: 1200,
    unitWeight: 20,
  },

  {
    arrivalTime: "20 Sep 2021",
    caption: "Vermicompost to boost soil",
    fertilizerId: 21,
    measurementUnit: "kg",
    name: "G-vermi",
    offer: 13,
    photo:
      "https://res.cloudinary.com/do1sv3tbt/image/upload/v1632089670/fertilizerproducts/dd9m7grezhqy9pmnpjrw.jpg",
    price: 487,
    reOrderLevel: 10,
    stock: 257,
    unitPrice: 560,
    unitWeight: 5,
  },
  {
    arrivalTime: "20 Sep 2021",
    caption: "Grade one vermicompost for palnt growth",
    fertilizerId: 22,
    measurementUnit: "kg",
    name: "G1-vermi",
    offer: 0,
    photo:
      "https://res.cloudinary.com/do1sv3tbt/image/upload/v1632089669/fertilizerproducts/gtssnotg5ll8ybmpr62u.jpg",
    price: 390,
    reOrderLevel: 20,
    stock: 780,
    unitPrice: 390,
    unitWeight: 5,
  },
  {
    arrivalTime: "20 Sep 2021",
    caption: "High quality coco peat",
    fertilizerId: 23,
    measurementUnit: "kg",
    name: "COCO Peat",
    offer: 5,
    photo:
      "https://res.cloudinary.com/do1sv3tbt/image/upload/v1632089669/fertilizerproducts/asxdhgexxyewgmbtli6i.jpg",
    price: 428,
    reOrderLevel: 50,
    stock: 1254,
    unitPrice: 450,
    unitWeight: 2,
  },
  {
    arrivalTime: "20 Sep 2021",
    caption: "Good for plants...",
    fertilizerId: 24,
    measurementUnit: "kg",
    name: "Bone meal manure",
    offer: 0,
    photo:
      "https://res.cloudinary.com/do1sv3tbt/image/upload/v1632089669/fertilizerproducts/j9pkqdiibzqc8aairixp.jpg",
    price: 1350,
    reOrderLevel: 10,
    stock: 359,
    unitPrice: 1350,
    unitWeight: 20,
  },
  {
    arrivalTime: "20 Sep 2021",
    caption: "Animal manure for plant growth",
    fertilizerId: 25,
    measurementUnit: "kg",
    name: "Cow Dung",
    offer: 5,
    photo:
      "https://res.cloudinary.com/do1sv3tbt/image/upload/v1632089667/fertilizerproducts/o6gvrxhcqgeohfammzhc.jpg",
    price: 342,
    reOrderLevel: 10,
    stock: 358,
    unitPrice: 360,
    unitWeight: 20,
  },
];

export function getProducts() {
  return PRODUCTS;
}
export function getProduct(id) {
  return PRODUCTS.find((product) => product.id == id);
}

// {
//     id: 8,
//     name: "FastLane Toy Car",
//     price: 600,
//     image: require("../../../assets/images/a.png"),
//     description:
//       "A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.",
//   },
