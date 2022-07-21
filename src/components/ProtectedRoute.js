import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useServer } from "../context";


const ProtectedRoute = () => {
  const {state} = useServer()
  const isAuthenticated = state.isAuthenticated;

  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default ProtectedRoute;
