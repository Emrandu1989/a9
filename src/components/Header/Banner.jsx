import './Banner.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const Banner = () => {

    useEffect(()=>{
         Aos.init({duration: 1000})
    },[])
    return (
        <>
              <div className="carousel  h-[500px] rounded-xl w-full relative">
  <div id="slide1" className="carousel-item relative slide-1  h-[500px] rounded-xl w-full">
   
  
     

 
    <div className="absolute flex justify-center left-5 right-5 gap-6 transform -translate-y-1/2  top-1/2">
             <div className="md:px-[280px] px-5 text-center ">
             <h2 className="md:text-6xl text-5xl text-white font-semibold"  data-aos="fade-right">Top Real Estate 
                  Listings in San Jose</h2>
             </div>
    </div>
    <div className="absolute flex justify-center left-5 right-5 gap-6 transform -translate-y-1/2  bottom-5">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative slide-2 h-[500px] rounded-xl w-full">

    <div className="absolute flex justify-center left-5 right-5 gap-6 transform -translate-y-1/2  top-1/2">
             <div className="md:px-[280px] px-5 text-center ">
             <h2 className="md:text-6xl text-5xl text-white font-semibold"  data-aos="fade-right">Your Comfort is Our first priorities.
                  </h2>
             </div>
    </div>
    <div className="absolute flex justify-center left-5 right-5 gap-6 transform -translate-y-1/2  bottom-5">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative  slide-3 h-[500px] rounded-xl w-full">
   
    <div className="absolute flex justify-center left-5 right-5 gap-6 transform -translate-y-1/2  top-1/2">
             <div className="md:px-[280px] px-5 text-center ">
             <h2 className="md:text-6xl text-5xl text-white font-semibold"  data-aos="fade-right">Go to Your sweet Dream</h2>
             </div>
    </div>
    <div className="absolute flex justify-center left-5 right-5 gap-6 transform -translate-y-1/2  bottom-5">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative  slide-4 h-[500px] rounded-xl w-full">
    
    <div className="absolute flex justify-center left-5 right-5 gap-6 transform -translate-y-1/2  top-1/2">
             <div className="md:px-[280px] px-5 text-center ">
             <h2 className="md:text-6xl text-5xl text-white font-semibold"  data-aos="fade-right">Have Your relax time with Us</h2>
             </div>
    </div>
    <div className="absolute flex justify-center left-5 right-5 gap-6 transform -translate-y-1/2  bottom-5">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </>
    );
};

export default Banner;