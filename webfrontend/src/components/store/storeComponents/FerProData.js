import ferImage1 from '../../../assets/images/Store/fer-pro-1.jpg';
import ferImage2 from '../../../assets/images/Store/fer-pro-2.jpg';
import ferImage3 from '../../../assets/images/Store/fer-pro-3.jpg';

const FerProData ={
    ferprodata:[
        {
            id: 1,
            img: 'https://ecotikaindia.online/wp-content/uploads/2019/09/112390-1.png',
            name: "Rock Phospate", 
            weight: 9,
            price: 3790,
            offer: 3790
        },
        {
            id: 4,
            img: 'https://homedepot.scene7.com/is/image/homedepotcanada/p_1001238278.jpg?wid=1000&hei=1000&op_sharpen=1',
            name: "Chicken Litter", 
            weight: 5,
            price: 1500,
            offer: 1500
        },
        {
            id: 100,
            img: 'https://www.mydreamgarden.in/pub/media/wysiwyg/ImagesForBlog/vermicompost.png',
            name: "Orgalife",
            weight: 10, 
            price: 1000,
            offer: 1000
        },
        {
            id: 101,
            img: 'https://cdn.shopify.com/s/files/1/0768/7475/products/Dirt_and_Dung_Front_View_6910d4e3-1fd0-40a6-90ab-a129ac4a385e.jpg?v=1475252617',
            name: "Dirt Dung", 
            weight: 3,
            price: 1500,
            offer: 1500
        },
        {
            id: 102,
            img: 'http://cdn.shopify.com/s/files/1/1752/6653/products/product-multi-purpose_1024x1024.jpg?v=1526488323',
            name: "Micro-Life", 
            weight: 3,
            price: 3050,
            offer: 3050
        },
        {
            id: 103,
            img: 'data:image/jpeg;base64,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',
            name: "Org-Lawn Builder", 
            weight: 5,
            price: 4990,
            offer: 4990
        },
        {
            id: 104,
            img: 'https://pictures.attention-ngn.com//portal/30/355188/products/1511881549.1922_115_o.jpg',
            name: "Ferti plus", 
            weight: 25,
            price: 6790,
            offer: 6790
        },
        {
            id: 105,
            img: 'https://www.kellogggarden.com/wp-content/uploads/2019/01/all-natural-garden-soil-organic-plus.png',
            name: "Garden-soil", 
            weight: 25,
            price: 2679,
            offer: 2679
        },
        {
            id: 106,
            img: 'https://sc04.alicdn.com/kf/H7a41c2f040bf49c4a9660f62274279cfC.jpg',
            name: "Swift Frow", 
            weight: 1,
            price: 2780,
            offer: 2780
        },
        {
            id: 107,
            img: 'https://www.kellogggarden.com/wp-content/uploads/2017/06/What-Is-Organic-Fertilizer-e1498236610342.jpg',
            name: "Organic plus", 
            weight: 1,
            price: 2670,
            offer: 2670
        },
        {
            id: 108,
            img: 'https://www.arbico-organics.com/images/uploads/1305505_tanks_supermix_organic_600x600.jpg',
            name: "Organic Super-Mix", 
            weight: 2,
            price: 2750,
            offer: 2750
        },
        {
            id: 109,
            img: 'https://m.media-amazon.com/images/I/619B7aaWWlL._AC_SX425_.jpg',
            name: "Garden-Blend", 
            weight: 1,
            price: 4170,
            offer: 4170
        },
        {
            id: 110,
            img: 'https://morningchores.com/wp-content/uploads/2020/06/SEA-90-Organic-Fertilizer-for-Hydroponics-800x791.jpg',
            name: "Sea-90", 
            weight: 1,
            price: 1250,
            offer: 1250
        },
        {
            id: 111,
            img: 'https://assets.eflorist.com/site/68297600/assets/products/PHR_/sku6880142.jpg',
            name: "Dramatic", 
            weight: 2,
            price: 1999,
            offer: 1999
        },
    ],

    ferprodata1:[
        {
            id: 1,
            img: 'https://m.media-amazon.com/images/I/61NDpj1AUWL._SX466_.jpg',
            name: "Klee Pura", 
            weight: 9,
            price: 3790,
            offer: 3790
        },
        {
            id: 2,
            img: 'https://www.violey.com/images/produkte/500x500sc/4260541290100.jpg',
            name: "Vermicompost", 
            weight: 50,
            price: 1540,
            offer: 1650
        },
        {
            id: 200,
            img: 'https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_250,h_229/https://learn.eartheasy.com/site-files/2019/06/Sustane_20lb_ConcentratedCompostRetail_bagCropped.jpg',
            name: "Concentrated Compost",
            weight: 5, 
            price: 1000,
            offer: 1250
        },
        {
            id: 201,
            img: 'https://i2.wp.com/savvygardening.com/wp-content/uploads/2021/02/fertilizer-liquid-organic3.jpg?resize=600%2C600&ssl=1',
            name: "Org-Liquid", 
            weight: 1,
            price: 1500,
            offer: 1550
        },
        {
            id: 202,
            img: 'https://www.treehugger.com/thmb/YNNxUEaKxOjEdT2DAeIpPX3TquM=/900x0/filters:no_upscale():max_bytes(150000):strip_icc()/dr-earth-root-zone-organic-fertilizer-210ba3879ea34fd18320faf1ad813710.jpg',
            name: "Root-zone", 
            weight: 5,
            price: 3050,
            offer: 3050
        },
        {
            id: 110,
            img: 'https://morningchores.com/wp-content/uploads/2020/06/SEA-90-Organic-Fertilizer-for-Hydroponics-800x791.jpg',
            name: "Sea-90", 
            weight: 1,
            price: 1250,
            offer: 1250
        },
        {
            id: 7,
            img: 'https://img.diytrade.com/cdimg/1925879/26573591/0/1378867205/100_natural_Bamboo_Granular_Organic_fertilizer.jpg',
            name: "BamBoo power", 
            weight: 5,
            price: 6790,
            offer: 6800
        },
    ],

    ferofferdata:[
        {
            id: 2,
            img: 'https://m.media-amazon.com/images/I/61NDpj1AUWL._SX466_.jpg',
            name: "Vermicompost", 
            weight: 9,
            price: 1463,
            offer: 1540
        },
        {
            id: 3,
            img: 'https://www.stones4homes.co.uk/wp-content/uploads/2021/04/Farmyard-Manure-1-004.jpg',
            name: "Manure", 
            weight: 5,
            price: 950,
            offer: 1000
        },
        {
            id: 5,
            img: 'https://images-na.ssl-images-amazon.com/images/I/81uaIFazqHL.jpg',
            name: "Liter Seaweed",
            weight: 4, 
            price: 2897,
            offer: 3050
        },
        {
            id: 6,
            img: 'https://www.ubuy.com.lk/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9hc3IvMjZjODRlOWEtYzBlMS00OTRiLThkNGQtNzE5YTVlMjBkNjBjXzEuNGYxYTBmMGVjMmJhMWM3MTU5NDBlZjgzNDFjOWI4YjcuanBlZz9vZG5XaWR0aD00MDAmYW1wO29kbkhlaWdodD00MDAmYW1wO29kbkJnPWZmZmZmZg.jpg',
            name: "MorBloom", 
            weight: 10,
            price: 4740,
            offer: 4990
        },
        {
            id: 7,
            img: 'http://www.biopowerlanka.com/images/bio-gold.jpg',
            name: "Bio Gold", 
            weight: 4,
            price: 2545,
            offer: 2679
        },
        {
            id: 8,
            img: 'http://www.biopowerlanka.com/images/bio-vaccine.jpg',
            name: "Bio Vaccine", 
            weight: 4,
            price: 2502,
            offer: 2780
        },
        {
            id: 9,
            img: 'https://m.media-amazon.com/images/I/61NDpj1AUWL._SX466_.jpg',
            name: "Bio Vermi Compost", 
            weight: 4,
            price: 2536,
            offer: 2670
        },
        {
            id: 300,
            img: 'https://abcdn.okchem.com/showroom/al/201905/1139/2f5a3d6991a05afa65881cd6fd133bf5.jpg',
            name: "Humin Rich", 
            weight: 1,
            price: 2679,
            offer: 2750
        },
        {
            id: 301,
            img: 'https://images-na.ssl-images-amazon.com/images/I/81LN7j-f4jL.jpg',
            name: "Koujikin", 
            weight:2,
            price: 2780,
            offer: 2850
        },
        {
            id: 302,
            img: 'https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/90003152_XL1.jpg',
            name: "Mr.Ganic", 
            weight: 1,
            price: 2670,
            offer: 2800
        },
    ],

    fersearchdata: [
        {
            id: 7,
            img: 'http://www.biopowerlanka.com/images/bio-gold.jpg',
            name: "Bio Gold", 
            weight: 4,
            price: 2545,
            offer: 2679
        },
        {
            id: 8,
            img: 'http://www.biopowerlanka.com/images/bio-vaccine.jpg',
            name: "Bio Vaccine", 
            weight: 4,
            price: 2502,
            offer: 2780
        },
        {
            id: 9,
            img: 'https://m.media-amazon.com/images/I/61NDpj1AUWL._SX466_.jpg',
            name: "Bio Vermi Compost", 
            weight: 4,
            price: 2536,
            offer: 2670
        },
        {
            id: 10,
            img: 'https://www.huahng.com.sg/wp-content/uploads/2017/04/NPK-5-5-5-5-Kg.jpg',
            name: "Bio-Lanka fertilizer", 
            weight: 3,
            price: 1790,
            offer: 2000
        },
        {
            id: 11,
            img: 'https://drearth.com/wp-content/uploads/NitrogenFertBagComp-699.jpg',
            name: "Nitro Bio",
            weight: 1,
            price: 1080,
            offer: 1500
        },
        {
            id: 12,
            img: 'https://image.made-in-china.com/202f0j00dYmfrhUtsupC/Amino-Acid-Organic-16-1-2-NPK-Granular-Fertilizer-for-Sale.jpg',
            name: "NP-Bio fertilizer",
            weight: 4,
            price: 4690,
            offer: 5000
        },
        {
            id: 13,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRok3owwkQdKaz4d02VYkX3n8u3CAmjpeKLYQ&usqp=CAU',
            name: "NPK-Bio",
            weight: 2,
            price: 2480,
            offer: 3100
        },
    ],
};

export default FerProData;