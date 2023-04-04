import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute(props) {
  return (
    props.loggedIn ? <Outlet /> : <Navigate to="/sign-in" replace/>
)}

export default ProtectedRoute;