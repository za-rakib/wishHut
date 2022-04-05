import React from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Announcement from "../../components/Shared/Announcement/Announcement";
import Products from "../../components/Home/Products/Products";
import Newsletter from "../../components/Home/NewSlater/Newsletter";
import Footer from "../../components/Shared/Footer/Footer";
import Slider from "../../components/Home/Slider/Slider";
import Categories from '../../components/Home/Categories/Categories';


const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider/>
      <Categories/>
      <Products />
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
