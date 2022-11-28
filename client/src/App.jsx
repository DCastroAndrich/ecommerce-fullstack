import React from "react";
import Announcement from "./layouts/Announcement";
import CategoriesContainer from "./layouts/CategoriesContainer";
import PopularProductsContainer from "./layouts/PopularProductsContainer";
import SliderContainer from "./layouts/SliderContainer";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="font-commisioner">
      <Announcement />
      <Home />
      <SliderContainer />
      <CategoriesContainer />
      <PopularProductsContainer />
    </div>
  );
};

export default App;
