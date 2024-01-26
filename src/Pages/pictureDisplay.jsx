import React, { useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageModal from "../Components/imageModal";

import Arch from "../assets/workPhotos/arch.jpg";
import Cabin from "../assets/workPhotos/cabin.jpg";
import City from "../assets/workPhotos/city.jpg";
import Cloudy from "../assets/workPhotos/cloudy.jpg";
import Sully from "../assets/workPhotos/fatSullys.jpg";

import Fog from "../assets/workPhotos/fog.jpg";
import Glass from "../assets/workPhotos/glass.jpg";
import Golden from "../assets/workPhotos/golden.jpg";
import Grey from "../assets/workPhotos/greyMtn.jpg";
import Oasis from "../assets/workPhotos/oasis.jpg";
import Sand from "../assets/workPhotos/sand.jpg";

import Sun from "../assets/workPhotos/sunCity.jpg";
import Texture from "../assets/workPhotos/texture.jpg";
import Tree from "../assets/workPhotos/tree.jpg";
import Water from "../assets/workPhotos/water.jpg";
import Mtn from "../assets/workPhotos/waterMtn.jpg";

function pictureDisplay() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedImage(null);
  };
  const itemData = [
    {
      img: Arch,
      title: "arch",
    },
    {
      img: Cabin,
      title: "Books",
    },
    {
      img: City,
      title: "Sink",
    },
    {
      img: Cloudy,
      title: "Kitchen",
    },
    {
      img: Sully,
      title: "Blinds",
    },
    {
      img: Golden,
      title: "Chairs",
    },
    {
      img: Glass,
      title: "Laptop",
    },
    {
      img: Water,
      title: "Doors",
    },
    {
      img: Oasis,
      title: "Coffee",
    },
    {
      img: Fog,
      title: "Storage",
    },
    {
      img: Grey,
      title: "Candle",
    },
    {
      img: Sand,
      title: "Coffee table",
    },
    {
      img: Mtn,
      title: "Coffee table",
    },
    {
      img: Texture,
      title: "Coffee table",
    },
    {
      img: Tree,
      title: "Coffee table",
    },
    {
      img: Sun,
      title: "Coffee table",
    },
  ];
  return (
    <>
      <Box
        sx={{
          width: "75%",
          height: "100vh",
          overflowY: "scroll",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                onClick={() => handleImageClick(item.img)}
                style={{ width: "100%", height: "100%" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <div className="work main-container">
        <ImageModal
          show={showModal}
          onHide={handleModalClose}
          imageSrc={selectedImage}
        />
        {/* {showBackToTop ? (
          <a
            href="#back-to-top"
            id="back-to-top"
            title="Back to Top"
            className="show"
          >
            &uarr;
          </a>
        ) : null} */}
      </div>
    </>
  );
}

export default pictureDisplay;
