import React, { useContext } from 'react';
import { UserContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';
import Swal from 'sweetalert2';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(UserContext)
    const location = useLocation()
    if (loading) return <div><Loading /></div>
    
    if (user && user?.email) {
        return children
    }
    if (!user) {
        Swal.fire({
            title: "Error!",
            text: "Plase Login!",
            icon: "error"
          });
    }
    return (
        <Navigate state={location.pathname} to={'/login'}></Navigate>
    );
};

export default PrivateRoute;