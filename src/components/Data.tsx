import image from "../public/assests/livingsofa.jpeg";
import table from "../public/assests/table.png";
import white from "../public/assests/whitesofa.png";
import chair from "../public/assests/whitechair.png";
import image1 from "../public/assests/sofa.png";
import pooty from "../public/assests/potty.jpeg";
import lamp from "../public/assests/lamp.png";
import gray from "../public/assests/graysofa.png";
import pinky from "../public/assests/pingy.jpeg";
import { StaticImageData } from "next/image";

interface ProductInterface {
  id: number;
  src: StaticImageData;
  title: string;
  description: string;
  disprice?: string;
  price: string;
  Details?: string;
  bg? : string,
  
  badge? : string 
}

interface ImagesInterface {
  id: number;
  img: StaticImageData;
}

export const productImages: ImagesInterface[] = [
  { id: 1, img: image1 },
  { id: 2, img: image1 },
  { id: 3, img: image1 },
  { id: 4, img: image1 },
  { id: 5, img: image1 },
];




export const ProductData: ProductInterface[] = [
  {
    id: 1,
    title: "Sylterine",
    description: "Stylish cafe chair",
    price: "2.500.000",
    src: table,
    disprice: "3.500.000",
    Details:
      "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    bg : '#E97171',
    badge : '-30%',
    

  },
  {
    id: 2,
    title: "Leviosa",
    description: "Stylish cafe chair",
    price: "2.500.000",
    src: chair,
    disprice: "3.500.000",
    Details :'Leviosa Enhance your cafe or dining area with this sophisticated chair. Leviosa combines elegance with exceptional comfort.'
  },
  {
    id: 3,
    title: "Lolito",
    description: "Luxuary big Sofa",
    price: "7.000.000",
    src: white,
    disprice: "14.000.000",
    bg : '#E97171',
    badge : '-50%',
    Details : 'Lolito A spacious and luxurious sofa offering the perfect blend of comfort and style. Ideal for relaxing in modern living rooms.'
  },
  {
    id: 4,
    title: "Respira",
    description: "outdoor",
    price: "500.000",
    src: image,
    bg : '#2EC1AC',
    badge : 'New',
     Details : 'Respira Crafted for outdoor relaxation, this chair is durable and stylish. Perfect for gardens, patios, or balconies.'
  },
  {
    id: 5,
    title: "Grifo",
    description: "NightLamp",
    price: "1.500.000",
    src: lamp,
    disprice: "3.500.000",
    Details :" Grifo: A sleek night lamp that adds warmth to your bedroom or study. Compact and modern, it fits effortlessly into any decor."
  },
  {
    id: 6,
    title: "Muggo",
    description: "Small mug",
    price: "2.500.000",
    src: gray,
    bg : '#2EC1AC',
    badge : 'New',
    Details : 'Muggo  A minimalist mug designed for coffee and tea lovers. Its compact and durable design makes it a must-have for everyday use.'
  },
  {
    id: 7,
    title: "Pingky",
    description: "Cute bed set",
    price: "7.000.000",
    disprice: "14.000.000",
    src: pinky,
    bg : '#E97171',
    badge : '-50%',
    Details : "Pingky: A cozy bed set with a charming and stylish design. Adds a touch of cuteness to your bedroom decor."
  },
  {
    id: 8,
    title: "Potty",
    description: "Minimalist flower pot",
    price: "500.000",
    src: pooty,
    bg : '#2EC1AC',
    badge : 'New',
    Details : 'Potty A modern flower pot that highlights your plants beautifully. Its minimalist design complements any room or outdoor space.'
  },
];
