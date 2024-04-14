import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
       const location = useLocation()
       const {user,loading} = useContext(AuthContext);
       if(loading){
        return 
       }
       if(user){
          return children
       }
    return <Navigate state={location.pathname} to='/login' ></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
};
