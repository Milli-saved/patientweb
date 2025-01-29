import React, { createContext, useState, useEffect } from "react";
import { useNavigate, useRevalidator } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const userDetails = {
    name: "MillionTenkir",
    role: "patient",
  };
  // const [user, setUser] = useState(localStorage.getItem("user"));
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [station, setStation] = useState("");
  const [userStationId, setUserStationId] = useState("");
  const [roles, setRoles] = useState("");

  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");
  //   if (!storedUser) {
  //     navigate("/");
  //   }
  // }, []);
  console.log("user is HERE: ", user);

  useEffect(() => {
    if (user) {
      return;
    }
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      // if (storedUser) {
      //   const decodedToken = JSON.parse(storedUser);
      // console.log("the user: &&", decodedToken);
      setUser(storedUser);
      // }
    } catch (error) {
      navigate("/signin");
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        userStationId,
        setUserStationId,
        station,
        setStation,
        roles,
        setRoles,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
