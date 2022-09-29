import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { pathname, search }= useLocation();
    const { token } = useSelector((state) => ({...state.auth}));
    
    return token ? children : <Navigate to={`/?redirectedFrom=${encodeURI(pathname+search)}`} replace /> ; 
}

export default PrivateRoute;