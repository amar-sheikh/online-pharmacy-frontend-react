import img from "../../../assets/lifecare.jpg";
import "./Brand.css";

const Brand = () => {
  return (
    <div className="container gx-0 py-5 my-5 Full_main_brand">
      <h4 className="py-3 main_h2">Top Brands</h4>
      <div className="row gx-0 main_brand">
        <div className="col-md-2 col-6">
          <div className="home_brand text-center">
            <img src={img} alt="GSK" className="img-fluid" />
            <h4 className="Brand_title">GSK</h4>
          </div>
        </div>
        <div className="col-md-2 col-6">
          <div className="home_brand text-center">
            <img src={img} alt="Abbott" className="img-fluid" />
            <h4 className="Brand_title">Abbott</h4>
          </div>
        </div>
        <div className="col-md-2 col-6">
          <div className="home_brand text-center">
            <img src={img} alt="Himalaya" className="img-fluid" />
            <h4 className="Brand_title">Himalaya</h4>
          </div>
        </div>
        <div className="col-md-2 col-6">
          <div className="home_brand text-center">
            <img src={img} alt="Pfizer" className="img-fluid" />
            <h4 className="Brand_title">Pfizer</h4>
          </div>
        </div>
        <div className="col-md-2 col-6">
          <div className="home_brand text-center">
            <img src={img} alt="Teva" className="img-fluid" />
            <h4 className="Brand_title">Teva</h4>
          </div>
        </div>
        <div className="col-md-2 col-6">
          <div className="home_brand text-center">
            <img src={img} alt="Sandoz" className="img-fluid" />
            <h4 className="Brand_title">Sandoz</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
