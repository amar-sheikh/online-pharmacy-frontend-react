import img from "../../../assets/categories/Home_Main.png";
import "./Category.css";
export const Category = () => {
  return (
    <div className="container gx-0 py-5 my-5 Full_main_category">
      <h4 className="p-m-3 main_h2">Top Categories</h4>
      <div className="row gx-0 main_category">
        <div className="col-md-2 col-6">
          <div className="home_category text-center">
            <img src={img} alt="" className="img-fluid" />
            <h4 className="Category_title">Categories</h4>
          </div>
        </div>
        <div className="col-md-2 col-6">
          <div className="home_category text-center">
            <img src={img} alt="" className="img-fluid" />
            <h4 className="Category_title">Categories</h4>
          </div>
        </div>
        <div className="col-md-2 col-6">
          <div className="home_category text-center">
            <img src={img} alt="" className="img-fluid" />
            <h4 className="Category_title">Categories</h4>
          </div>
        </div>
        <div className="col-md-2 col-6">
          <div className="home_category text-center">
            <img src={img} alt="" className="img-fluid" />
            <h4 className="Category_title">Categories</h4>
          </div>
        </div>
        <div className="col-md-2 col-6">
          <div className="home_category text-center">
            <img src={img} alt="" className="img-fluid" />
            <h4 className="Category_title">Categories</h4>
          </div>
        </div>
        <div className="col-md-2 col-6">
          <div className="home_category text-center">
            <img src={img} alt="" className="img-fluid" />
            <h4 className="Category_title">Categories</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
