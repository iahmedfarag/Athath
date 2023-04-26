import React from "react";
import { useUserContext } from "../context/UserContext.jsx";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth0();
  const navigate = useNavigate();
  user ? children : navigate("/");
};

export default PrivateRoute;
