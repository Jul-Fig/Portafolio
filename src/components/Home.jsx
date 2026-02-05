import React from "react";
import Data from "./Data";
import CoverParticles from "./coverParticles";
import Header from "./Header";
import Project from './Project'
import Cards from './Cards'
//import FloatingLogos from "./FloatingLogos"

function Home() {
  return (
    <div>
     <CoverParticles/>
      <Header/>,
      <Data/>,
      <Project/>
      
      
    </div>
  );
}

export default Home;
