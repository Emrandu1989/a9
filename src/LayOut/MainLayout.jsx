import {Outlet} from 'react-router-dom';
import NavBar from '../components/Header/NavBar';
const MainLayout = () => {
    return (
        <div className='max-w-6xl mx-auto'>
              <NavBar/>
             <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;