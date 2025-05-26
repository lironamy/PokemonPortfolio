import { BrowserRouter } from "react-router-dom";
import { Contact, Hero, Navbar, Works, StarsCanvas, Model, Loader } from "./components";
import { useState, useEffect } from "react";
import Rayquaza from "./assets/Rayquaza.png";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData().then(() => {
      setIsLoading(false); 
    });
  }, []);

  const loadData = () => {
    return new Promise(resolve => {
      const img = new Image();
      img.src = Rayquaza;
      img.decode?.(); 
      img.onload = resolve; 
    })
  }

  

  return (
    <BrowserRouter>
     {isLoading ? (
     <Loader />)
      :
      (
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <div className='relative z-0'>
          <Model />            
          <Works />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      )}
    </BrowserRouter>
  );
}

export default App;
