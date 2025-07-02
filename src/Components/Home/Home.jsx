import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Brand from "./Brand/Brand";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Brand brand={brand} />
    </div>
  );
};

export default Home;
