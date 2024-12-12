import Header from "../header/Header";
import LoginHeader from "../header/LoginHeader";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div>
      {isLoginPage ? <LoginHeader /> : <Header />}
      
      <Outlet />
    </div>
  );
};

export default Layout;
