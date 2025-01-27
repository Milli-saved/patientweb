import { Route, Routes } from "react-router-dom";
import Signin from "../../pages/signin";
import HomeWeb from "../../pages/website/index";

function Layout() {
  return (
    <Routes>
      <Route path="/signin" element={<Signin />} />
      <Route path="/" element={<HomeWeb />} />
    </Routes>
  );
}

export default Layout;
