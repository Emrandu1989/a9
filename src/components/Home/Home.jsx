
import { useContext } from "react";
import Estates from "../Estates/Estates";
import Banner from "../Header/Banner";
import { Helmet, } from 'react-helmet-async';
import { AuthContext } from "../../Providers/AuthProvider";

const Home = () => {
  const { loading } = useContext(AuthContext)


  return (
    <>
      <Helmet>
        <title>Regal || Home</title>
      </Helmet>
             {
               loading ?  <div className="flex justify-center items-center"> <span className="loading text-orange-400 loading-bars loading-lg"></span>  </div> 
               :  <div>
               <Banner />
               <section>
                 <Estates></Estates>
               </section>
             </div>

               
             }
    


    </>
  );
};

export default Home;