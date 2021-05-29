import { Redirect, Route } from "react-router";
import { useSelector } from "react-redux";
// import ScrollToTop from "../../components/base/scrollToTop";

const AuthRoute = (props) => {
  const { type } = props;
  const { user } = useSelector((state) => state.user);
  const isAuth = localStorage.getItem("token");
  let role = null;
  if (user) {
    role = user.access;
  }

  if (type === "adminOnly" && role !== 0) return <Redirect to="/" />;
  else if (type === "guest" && isAuth) return <Redirect to="/" />;
  else if (type === "private" && !isAuth) return <Redirect to="/login" />;
  return <Route {...props} />;
};

export default AuthRoute;
