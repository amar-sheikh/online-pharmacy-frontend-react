import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import Brand from "./Brand/Brand";
import OrderMethod from "./OrderMethod/OrderMethod";


const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Product />
      <Brand />
      <div className="section1 py-5">
        <OrderMethod />
      </div>
    </div>
  );
};

export default Home;
