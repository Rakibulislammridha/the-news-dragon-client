import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = () => {
  const { user } = useContext(AuthContext);

  return;
  <></>;
};

export default PrivateRoute;

/**
 *
 * Steps
 *
 * 1. Check user is logged in or not
 * 2. If user is logged in then allow them to visit the route
 * 3. Else redirect the user to the login page
 *
 */
