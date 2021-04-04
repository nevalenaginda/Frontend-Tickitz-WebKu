import { Redirect, Route } from "react-router";
import { useSelector } from "react-redux";

const AuthRoute = (props) => {
  const { type } = props;
  const { login } = useSelector((state) => state.loginPage);
  const isAuth = localStorage.getItem("token");
  const role = login.access;

  if (type === "adminOnly" && role !== 0) return <Redirect to="/" />;
  else if (type === "guest" && isAuth) return <Redirect to="/" />;
  else if (type === "private" && !isAuth) return <Redirect to="/login" />;
  return <Route {...props} />;
};

export default AuthRoute;
