import { useState } from "react";
import { loginApi } from "../api/auth.api";

const ALLOWED_USERS = [
  {
    email: "test@test.com",
    password: "1234567890",
  },
  {
    email: "anilkumarkolumuri@gmail.com",
    password: "1234567890",
  },
];

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
    
      const response = await loginApi(email, password);

      if (response?.data?.token) {
        localStorage.setItem("token", response.data.token);
        setLoading(false);
        return true;
      }
    } catch (apiError) {
      console.warn("API login failed, checking fallback credentials");
    }

   
    const matchedUser = ALLOWED_USERS.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
     
      localStorage.setItem("token", "assignment-demo-token");
      setLoading(false);
      return true;
    }

 
    setError("Invalid username or password");
    setLoading(false);
    return false;
  };

  const logout = () => {
    localStorage.removeItem("token");
  };

  return {
    login,
    logout,
    loading,
    error,
  };
};
