import { Navigate } from "react-router-dom";
import Loading from "./Loading";
import { useUser } from "../context/UserContext";

const AuthRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn, loading } = useUser();

  if (loading) {
    return <Loading />;
  }

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default AuthRoute;
