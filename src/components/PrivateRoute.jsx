import React from "react";
import { useUserContext } from "../context/UserContext.jsx";
import { Navigate, redirect, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const navigate = useNavigate();
  const { myUser } = useUserContext();
  myUser ? children : navigate("/");
};

export default PrivateRoute;
