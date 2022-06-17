import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export const ProductImage = ({ img = '' }) => {

   const { product } = useContext(ProductContext);
   let imgToShow: string;
   if (product.img) {
      imgToShow = product.img;
   } else if (img != '') {
      imgToShow = img
   } else {
      imgToShow = noImage;
   }

   return (
      <img src={imgToShow} alt="Coffee Mug" className={styles.productImg} />
   )
}