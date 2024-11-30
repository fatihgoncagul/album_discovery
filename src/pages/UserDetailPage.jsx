import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import UserDetailCard from "../components/UserDetailCard";
import UserAlbumList from "../components/UserAlbumList";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const UserDetailPage = () => {
  const { selectedUser, setSelectedUser, setUpdatedUsers } = useUserContext();
  const navigate = useNavigate();

  const handleUserUpdate = (updatedUser) => {
    setSelectedUser(updatedUser);
    const existingUsers = JSON.parse(sessionStorage.getItem("selectedUsers")) || [];
    const updatedUsersList = existingUsers.filter(user => user.id !== updatedUser.id);
  
    updatedUsersList.push(updatedUser);

    sessionStorage.setItem("selectedUsers", JSON.stringify(updatedUsersList));
    setUpdatedUsers(updatedUsersList);
  };



  if (!selectedUser) {
    return (
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        Kullanıcı seçilmedi!
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        padding: "32px",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      {/* Material-UI AppBar */}
      <AppBar position="static" sx={{ backgroundColor: "#2d87f0" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center", fontWeight: "bold" }}
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            Album Discovery
          </Typography>
        </Toolbar>
      </AppBar>

      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "24px",
          marginTop: "16px", // Add margin top here
          position: "relative",
          "&::after": {
            content: '""',
            display: "block",
            width: "50px",
            height: "4px",
            backgroundColor: "#007BFF",
            margin: "8px auto 0",
            borderRadius: "2px",
          },
        }}
      >
        Kullanıcı Detayı
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 6,
          justifyContent: "center",
          alignItems: "flex-start",
          marginTop: "32px",
        }}
      >
        {/* Kullanıcı Kartı */}
        <Box
          sx={{
            flex: 1,
            maxWidth: "400px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <UserDetailCard user={selectedUser} onUserUpdate={handleUserUpdate} />
        </Box>

        {/* Albüm Tablosu */}
        <Box
          sx={{
            flex: 2,
            maxWidth: "800px",
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            padding: "24px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: "16px",
              color: "#007BFF",
            }}
          >
            {selectedUser.name}'in Albümleri
          </Typography>
          <Divider sx={{ marginBottom: "16px" }} />
          <UserAlbumList userId={selectedUser.id} />
        </Box>
      </Box>
    </Box>
  );
};

export default UserDetailPage;
