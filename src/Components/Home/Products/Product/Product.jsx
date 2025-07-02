import img from "../../../assets/teststrip.png";

const Product = () => {
  return (
    <div className="Product_main">
      <div className="col">
        <div className="card border-0 h-100">
          <div className="card_head">
            <img src={img} alt="" className="img-fluid" />
          </div>
          <div className="card-body">
            <h5 className="Product_name">Devices and injectable</h5>
            <div className="icons py-2">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <h4 className="Product_price">$ 70</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
