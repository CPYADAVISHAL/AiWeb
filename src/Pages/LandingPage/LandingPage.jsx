import Header from "../../components/header/header";
import Navbar from "../../Navbar/Navbar";

import Footer from "../../components/footer /Footer";
import Categ from "../../components/categories/categ";
import Smartphone from "../../components/smartphone/smartphone";
import ProductCarousel from "../../components/Electronic/Electronic";
import EssentialsDeals from "../../components/Essentials/Essen";
import "./LandingPage.css";
import Carousel from "../../components/Carousel/Carousel"
const LandingPage = () => {
  return (
    <div className="body">
      {/* <Header /> */}
      <Navbar />
      <Carousel />
      <Smartphone />
      <EssentialsDeals />
      <Footer />
   {/* <SliderComponent /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;
