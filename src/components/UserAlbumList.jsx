import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AlbumDetailDialog from "./AlbumDetailDialog";
import toast from "react-hot-toast";

const UserAlbumList = ({ userId }) => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
        );
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        toast.error("Error fetching albums")
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, [userId]);

  const handleDialogOpen = (albumId) => {
    setSelectedAlbumId(albumId);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setSelectedAlbumId(null);
  };

  if (loading) {
    return <Typography>Uploading album data..</Typography>;
  }

  if (albums.length === 0) {
    return <Typography>Could not find album of the user.</Typography>;
  }

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)",
          borderRadius: "16px",
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f4f4f4" }}>
              <TableCell>
                <b>Album ID</b>
              </TableCell>
              <TableCell>
                <b>Album Name</b>
              </TableCell>
              <TableCell align="center">
                <b>Function</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {albums.map((album) => (
              <TableRow key={album.id}>
                <TableCell>{album.id}</TableCell>
                <TableCell>{album.title}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    sx={{
                      textTransform: "capitalize",
                      borderRadius: "8px",
                    }}
                    onClick={() => handleDialogOpen(album.id)}
                  >
                    Album's Detail
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      
      {selectedAlbumId && (
        <AlbumDetailDialog
          open={dialogOpen}
          onClose={handleDialogClose}
          albumId={selectedAlbumId}
        />
      )}
    </>
  );
};

export default UserAlbumList;
