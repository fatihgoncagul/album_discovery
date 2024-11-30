import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import UserList from "../components/UserList";

const UserPage = () => {
  return (
    <div
      style={{
        padding: "32px",
        backgroundColor: "#f4f5f7",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Material-UI AppBar */}
      <AppBar position="static" sx={{ backgroundColor: "#2d87f0" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center", fontWeight: "bold" }}
          >
            Album Discovery
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "800px",
          backgroundColor: "white",
          padding: "24px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          marginTop: "24px",
        }}
      >
        <UserList />
      </Box>
    </div>
  );
};

export default UserPage;
