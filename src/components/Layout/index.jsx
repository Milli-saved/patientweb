import { Route, Routes } from "react-router-dom";
import Signin from "../../pages/signin";
import HomeWeb from "../../pages/website/index";
import { AuthProvider } from "../../contexts/auth";

function Layout() {
  return (
    <Routes>
      <Route
        path="/signin"
        element={
          <AuthProvider>
            <Signin />
          </AuthProvider>
        }
      />
      <Route path="/" element={<HomeWeb />} />
    </Routes>
  );
}

export default Layout;
