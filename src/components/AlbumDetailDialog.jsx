import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  IconButton,
  Pagination,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AlbumDetailDialog = ({ open, onClose, albumId }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [totalPhotos, setTotalPhotos] = useState(0);

  const fetchPhotos = async (page, limit) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_page=${page}&_limit=${limit}`
      );
      const totalCount = response.headers.get("x-total-count"); // Toplam öğe sayısı
      const data = await response.json();
      console.log("Data", data)
      setPhotos(data);
      setTotalPhotos(parseInt(totalCount, 10));
      console.log("PHOTO", parseInt(totalCount, 10))
    } catch (error) {
      console.error("Fotoğraf verisi alınırken bir hata oluştu:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (albumId) {
      fetchPhotos(currentPage, itemsPerPage);
    }
  }, [albumId, currentPage, itemsPerPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(event.target.value);
    setCurrentPage(1); // Sayfalama baştan başlasın
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Albüm Detayları</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {loading ? (
          <Typography>Fotoğraflar yükleniyor...</Typography>
        ) : photos.length === 0 ? (
          <Typography>Albümde fotoğraf bulunamadı.</Typography>
        ) : (
          <Table>
            <TableBody>
              {photos.map((photo) => (
                <TableRow key={photo.id}>
                  <TableCell>
                    <img
                      src={photo.thumbnailUrl}
                      alt={photo.title}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "8px",
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography>{photo.title}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "16px",
        }}
      >
        <FormControl size="small">
          <InputLabel>Gösterilecek</InputLabel>
          <Select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            sx={{ minWidth: 100 }}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>
        <Pagination
          count={Math.ceil(totalPhotos / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </DialogActions>
    </Dialog>
  );
};

export default AlbumDetailDialog;
