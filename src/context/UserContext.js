import React, { createContext, useState, useEffect, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(
    JSON.parse(sessionStorage.getItem("selectedUser")) || null
  );

  useEffect(() => {
    // Kullanıcıları API'den çekiyoruz
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Kullanıcıları çekerken bir hata oluştu:", error);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    // selectedUser'ı sessionStorage'da saklıyoruz
    if (selectedUser) {
      sessionStorage.setItem("selectedUser", JSON.stringify(selectedUser));
    }
  }, [selectedUser]);

  return (
    <UserContext.Provider value={{ users, selectedUser, setSelectedUser  }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
