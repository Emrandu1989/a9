
import Estates from "../Estates/Estates";
import Banner from "../Header/Banner";
import { Helmet, } from 'react-helmet-async';

const Home = () => {

   
    return (
        <>
                 <Helmet>
        <title>Regal || Home</title>
                </Helmet>

             <Banner/>   



             <section>
                  <Estates></Estates>
             </section>
        </>
    );
};

export default Home;