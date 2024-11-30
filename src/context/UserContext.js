import React, { createContext, useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [updatedUsers, setUpdatedUsers] = useState(
    JSON.parse(sessionStorage.getItem("selectedUsers")) || null
  );
  const [selectedUser, setSelectedUser] = useState();

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      mergeUpdatedUsers(data);
    } catch (error) {
      toast.error("Error fetching users.")
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [location]);

  const mergeUpdatedUsers = (data) => {
    if ( data.length > 0) {
      const mergedUsers = data.map((user) => {
        const updatedUser = updatedUsers?.find((u) => u.id === user.id);
        return updatedUser ? updatedUser : user;
      });
      setUsers(mergedUsers);
    }
  }

  return (
    <UserContext.Provider value={{ users, updatedUsers, setUpdatedUsers, selectedUser, setSelectedUser, setUpdatedUsers, loading}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
