import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserCard from "./UserCard";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useUserContext } from "../context/UserContext";
import { CircularProgress } from "@mui/material";

const UserList = () => {
  const { users, setSelectedUser, loading} = useUserContext();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleUserDetailClick = (user) => {
    setSelectedUser(user);
    navigate("/userdetail");
  };

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [users, searchTerm]);

  return (
    <Paper
      elevation={3}
      sx={{
        padding: "32px",
        borderRadius: "16px",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        maxWidth: 1000,
        margin: "32px auto",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: "16px",
          fontWeight: "bold",
          textAlign: "center",
          color: "text.primary",
        }}
      >
        Kullanıcı Listesi
      </Typography>
      <Box
        sx={{
          marginBottom: "24px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          label="Kullanıcı Ara"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            width: "100%",
            maxWidth: "400px",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "center",
        }}
      >
        {loading ? (
          <CircularProgress />
        ) : (
          filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                onUserDetailClick={handleUserDetailClick}
              />
            ))
          ) : (
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                textAlign: "center",
                marginTop: "24px",
              }}
            >
              Aramanızla eşleşen kullanıcı bulunamadı.
            </Typography>
          )
        )}

      </Box>
    </Paper>
  );
};

export default UserList;
