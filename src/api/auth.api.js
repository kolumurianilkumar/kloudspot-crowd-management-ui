import axios from "../services/axios";

const fallbackLogin = ({ email, password }) => {
  const validUsers = [
    { email: "test@test.com", password: "1234567890" },
    { email: "anilkumarkolumuri@gmail.com", password: "1234567890" },
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isValid = validUsers.some(
        (u) => u.email === email && u.password === password
      );

      if (isValid) {
        resolve({
          token: "mock-jwt-token",
          user: { email },
        });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 300); // fast fallback
  });
};

export const loginApi = async (payload) => {
  try {
    return await Promise.race([
      axios.post("/auth/login", payload).then((res) => res.data),
      fallbackLogin(payload),
    ]);
  } catch (err) {
    throw new Error("Invalid credentials");
  }
};
