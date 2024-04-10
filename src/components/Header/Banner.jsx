import './Banner.css'

const Banner = () => {
    return (
        <>
              <div className="carousel  h-[500px] rounded-xl w-full relative">
  <div id="slide1" className="carousel-item relative slide-1  h-[500px] rounded-xl w-full">
   
    {/* <img src="https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className=" h-[500px] rounded-xl w-full" /> */}
     

 
    <div className="absolute flex justify-center left-5 right-5 gap-6 transform -translate-y-1/2  top-1/2">
             <div className="md:px-[280px] px-5 text-center ">
             <h2 className="md:text-6xl text-5xl text-yellow-600 font-semibold">Top Real Estate 
                  Listings in San Jose</h2>
             </div>
    </div>
    <div className="absolute flex justify-center left-5 right-5 gap-6 transform -translate-y-1/2  bottom-5">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative  h-[500px] rounded-xl w-full">
    <img src="https://plus.unsplash.com/premium_photo-1661903136240-a97367001a64?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className=" h-[500px] rounded-xl w-full" />
    <div className="absolute flex justify-center left-5 right-5 gap-6 transform -translate-y-1/2  top-1/2">
             <div className="md:px-[280px] px-5 text-center ">
             <h2 className="md:text-6xl text-5xl font-semibold">Your Comfort is Our first priorities.
                  </h2>
             </div>
    </div>
    <div className="absolute flex justify-center left-5 right-5 gap-6 transform -translate-y-1/2  bottom-5">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative  h-[500px] rounded-xl w-full">
    <img src="https://plus.unsplash.com/premium_photo-1661962495669-d72424626bdc?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className=" h-[500px] rounded-xl w-full" />
    <div className="absolute flex justify-center left-5 right-5 gap-6 transform -translate-y-1/2  top-1/2">
             <div className="md:px-[280px] px-5 text-center ">
             <h2 className="md:text-6xl text-5xl font-semibold">Go to Your sweet Dream</h2>
             </div>
    </div>
    <div className="absolute flex justify-center left-5 right-5 gap-6 transform -translate-y-1/2  bottom-5">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative  h-[500px] rounded-xl w-full">
    <img src="https://plus.unsplash.com/premium_photo-1661963239507-7bdf41a5e66b?q=80&w=1423&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className=" h-[500px] rounded-xl w-full" />
    <div className="absolute flex justify-center left-5 right-5 gap-6 transform -translate-y-1/2  top-1/2">
             <div className="md:px-[280px] px-5 text-center ">
             <h2 className="md:text-6xl text-5xl font-semibold">Have Your relax time with Us</h2>
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