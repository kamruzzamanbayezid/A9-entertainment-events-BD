import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../Hook/UseAuth";
import PropTypes from 'prop-types';


const PrivateRoute = ({ children }) => {

      const { user, loading } = UseAuth();
      const location = useLocation();
      console.log(location);

      if (loading) {
            return <div className="flex justify-center items-center h-screen"><span className="loading loading-bars loading-lg"></span></div>
      }
      if (!user) {
            return <Navigate state={location.pathname} to='/login'></Navigate>
      }

      return children;
};

PrivateRoute.propTypes = {
      children: PropTypes.node
}

export default PrivateRoute;