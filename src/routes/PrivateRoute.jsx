import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  //   console.log(location);

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;

/**
 * --------------
 * Steps
 * --------------
 *
 * 1. Check user is logged in or not
 * 2. If user is logged in then allow them to visit the route
 * 3. Else redirect the user to the login page
 * 4. Setup the private router
 *
 */
