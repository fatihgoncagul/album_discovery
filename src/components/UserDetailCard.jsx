import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import UserEditDialog from "./UserEditDialog";

const UserDetailCard = ({ user, onUserUpdate }) => {
  const { address, phone, website, company, email, username } = user;
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const handleOpenEditDialog = () => setIsEditDialogOpen(true);
  const handleCloseEditDialog = () => setIsEditDialogOpen(false);

  const handleSave = (updatedUser) => {
    console.log("Güncellenen Kullanıcı Bilgileri:", updatedUser);
    onUserUpdate(updatedUser); // Üst bileşene bilgileri aktar
  };

  return (
    <>
      <Card
        sx={{
          width: "100%",
          maxWidth: 400,
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)",
          borderRadius: "16px",
          background: "linear-gradient(135deg, #ffffff, #f9f9f9)",
          padding: "24px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        {/* Kullanıcı Avatarı ve Adı */}
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Avatar
            src={`https://picsum.photos/seed/${user.id}/150`}
            sx={{
              width: 100,
              height: 100,
              margin: "auto",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", mt: 2, color: "#333" }}
          >
            {user.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "gray", mb: 1, fontStyle: "italic" }}
          >
            @{username}
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Kullanıcı Detayları */}
        <CardContent>
          <Typography variant="body1" sx={{ textAlign: "left", mb: 1 }}>
            <b>Email:</b> {email}
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "left", mb: 1 }}>
            <b>Telefon:</b> {phone}
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "left", mb: 1 }}>
            <b>Web Sitesi:</b>{" "}
            <a
              href={`http://${website}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1976D2", textDecoration: "none" }}
            >
              {website}
            </a>
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "left", mb: 1 }}>
            <b>Şirket:</b> {company.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ textAlign: "left", color: "gray", mb: 2 }}
          >
            "{company.catchPhrase}"
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "left", mb: 1 }}>
            <b>Adres:</b>{" "}
            {`${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`}
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "left", color: "gray" }}>
            (Lat: {address.geo.lat}, Lng: {address.geo.lng})
          </Typography>
        </CardContent>

        <Divider sx={{ my: 2 }} />

        {/* Düzenle Butonu */}
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              borderRadius: "8px",
              padding: "10px 24px",
              textTransform: "none",
              fontWeight: "bold",
            }}
            onClick={handleOpenEditDialog}
          >
            Kullanıcı Düzenle
          </Button>
        </Box>
      </Card>

      <UserEditDialog
        open={isEditDialogOpen}
        user={user}
        onClose={handleCloseEditDialog}
        onSave={handleSave}
      />
    </>
  );
};

export default UserDetailCard;
