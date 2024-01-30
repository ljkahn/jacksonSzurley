import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const ImageModal = ({ show, onHide, imageSrc }) => {
  return (
    <Dialog
      open={show}
      onClose={onHide}
      aria-labelledby="image-dialog-title"
      aria-describedby="image-dialog-description"
      maxWidth="md"
      fullWidth
    >
      <IconButton
        aria-label="close"
        onClick={onHide}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <img
          src={imageSrc}
          alt="Enlarged version"
          style={{
            maxWidth: "100%",
            maxHeight: "80vh",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
