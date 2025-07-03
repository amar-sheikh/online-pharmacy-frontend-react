// import RealatedProducts from "./RealatedProducts/RealatedProducts";
import img from "../../assets/singleimg1.jpeg";
//import { useContext, useState } from "react";
import "./SingleProducts.css";
//import { useFetcher } from "react-router-dom";
//import useFetch from "../../hooks/useFetch";
// imporrt { NavLink, usePrams } from "react-router-dom";
//import {useContext, useState} from "react";
//import {Context} from "../../utils/context"

const SingleProducts = () => {
  //const [quantity, setQuantity] = useState(1);
  //const { id } = useParams();
  //const { data } = useFetch(`/api/products?populate=*&[filter][id]=${id}`);

  //const { handleAddToCart } = useContext(Context);

  //   if (!data) return;
  //   const product = data?.data?.[0]?.attributes;
  //   const increment = () => {
  //     setQuantity((prevState) => prevState + 1);
  //   };

  //   const Decrement = () => {
  //     setQuantity((preState) => {
  //       if (prevState == 1) return 1;
  //       return preState - 1;
  //     });
  //   };
  return (
    <div className="container gx-0 py-4 single_Product_main">
      <div className="row gx-0 py-2 align-items-center">
        <div className="col-md-6">
          <div className="singleProduct1">
            <img src={img} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="single_Product2">
            <h2 className="single_Product-title">Panadol 500mg</h2>
            <h3 className="single_Product-price">$ 534</h3>
            <p className="single_Product-description">
              Panadol 500mg Tablet is helpful for the treatment of migraine,
              headache, toothache, backache, sore throat, and helps to reduce
              the temperature. Each tablet of Panadol 500mg contains Paracetamol
              500mg as an active ingredient.
            </p>
            <div className="carts-button">
              <div className="quality-buttons my-4 py-3">
                <span className="single-span">-</span>
                sadsa
                <span className="single-span">+</span>
              </div>
              <button className="main_btn1 py-3">
                <i className="fa-solid fa-cart-shopping pe-2 fs-5"></i>
                Add To Cart
              </button>
              <hr />
              <div className="single-category py-2">
                <span className="fw-bold fs-6">Category :</span>
                <span className="ps-1">qwer</span>
              </div>
              <span className="fw-bold fs-6">Brand :</span>
              <div className="single-social py-2">
                <span className="fw-bold fs-6">Share :</span>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-tiktok"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
