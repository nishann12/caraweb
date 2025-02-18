import React from "react";
import Home from "./pages/Home";
import FeaturedProducts from "./pages/FeaturedProducts";
import Banner from "./pages/Banner";
import NewArrivals from "./pages/NewArrivals";
import Signup from "./pages/Signup";
import Footer from "./pages/Footer";


const App = () => {
  return (
    <div>
      <Home />
      <FeaturedProducts />
      <Banner />
      <NewArrivals />
      <Signup />
      <Footer />

    </div>
  );
};

export default App;
