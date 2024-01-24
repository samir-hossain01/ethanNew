/** @format */
import React,{ useEffect, useState} from "react";


import Wrapper from "./Home.styled";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/Banner/Banner";
import InfiniteSlider from "../Components/InfiniteSlider/InfiniteSlider";
import Feature from "../Components/Feature/Feature";
import About from "../Components/About/About";
import Tokenmics from "../Components/Tokenmics/Tokenmics";
import Advantage from "../Components/Advantage/Advantage";
import Roadmap from "../Components/Roadmap/Roadmap";
import Marque from "../Components/Marque/Marque";
import Footer from "../Components/Footer/Footer";


function Home() {

  return (

<Wrapper>
  <Navbar/>
<Banner/>
<InfiniteSlider />
<Feature />
<About/>
<Tokenmics />
<Roadmap />
<Advantage />
<Marque />
<Footer />
</Wrapper>
   
  );
}

export default Home;
