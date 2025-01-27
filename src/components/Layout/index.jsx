import { Route, Routes } from "react-router-dom";
import Signin from "../../pages/signin";
import HomeWeb from "../../pages/website/index";
import { AuthProvider } from "../../contexts/auth";
import Sidebar from "../Sidebar/Sidebar";
import { ProtectedRoute } from "./ProtectedRoutes";

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
      <Route
        path="*"
        element={
          <AuthProvider>
            <ResponsiveLayout />
          </AuthProvider>
        }
      />
    </Routes>
  );
}

function ResponsiveLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col justify-between flex-grow overflow-y-auto mt-16">
        <main className="flex-grow font-work">
          <AuthenticatedRoutes />
        </main>
      </div>
    </div>
  );
}

function AuthenticatedRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<ProtectedRoute />} />
      <Route path="/medical-record" element={<ProtectedRoute />} />
    </Routes>
  );
}

export default Layout;
