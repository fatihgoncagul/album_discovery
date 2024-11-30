import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


const UserCard = ({ user, onUserDetailClick }) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        padding: "16px",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
        },
        width: "100%",
        maxWidth: 800,
      }}
    >
      {/* Kullanıcı Fotoğrafı */}
      <CardMedia
        component="img"
        image={`https://picsum.photos/id/${user.id}/200`}
        alt={user.name}
        sx={{
          width: 100,
          height: 100,
          borderRadius: "12px",
          objectFit: "cover",
        }}
      />

      {/* Kullanıcı Bilgileri */}
      <CardContent sx={{ flex: 1 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            color: "text.primary",
          }}
        >
          {user.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginBottom: "12px" }}
        >
          {user.email}
        </Typography>
      </CardContent>

      
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => onUserDetailClick(user)}
          sx={{
            borderRadius: "8px",
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          User Detail
        </Button>
      </Box>
    </Card>
  );
};

export default UserCard;
