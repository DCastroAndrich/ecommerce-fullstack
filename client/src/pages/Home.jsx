import Announcement from "../layouts/Announcement";
import CategoriesContainer from "../layouts/CategoriesContainer";
import Footer from "../layouts/Footer";
import NavBar from "../layouts/Navbar";
import PopularProductsContainer from "../layouts/PopularProductsContainer";
import SliderContainer from "../layouts/SliderContainer";

const Home = () => {
  return (
    <div>
      <Announcement />
      <NavBar />
      <SliderContainer />
      <CategoriesContainer />
      <PopularProductsContainer />
      <Footer />
    </div>
  );
};

export default Home;
