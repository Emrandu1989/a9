
import Estates from "../Estates/Estates";
import Banner from "../Header/Banner";
import {
    Link,
    useLoaderData,
  } from "react-router-dom";

const Home = () => {
//    const Categorys = useLoaderData()
//    console.log(Categorys)
//    const {category_Name,id} = Categorys;
   
    return (
        <>
             <Banner/>   

              {/* <section className="my-12">
                 <div className="flex gap-6 flex-wrap text-lg ">
                  {
                    Categorys.map(category=>  <Link className="text-xl btn bg-[#bda76e] hover:text-black text-white font-semibold">{category.category_Name} </Link>   )
                  }

                 </div>
              </section> */}

             <section>
                  <Estates></Estates>
             </section>
        </>
    );
};

export default Home;