import {Outlet} from 'react-router-dom';
import NavBar from '../components/Header/NavBar';
import Footer from '../components/Footer/Footer';
const MainLayout = () => {
    return (
        <div className='max-w-6xl mx-auto'>
              <NavBar/>
             <Outlet></Outlet>
             <Footer/>
        </div>
    );
};

export default MainLayout;