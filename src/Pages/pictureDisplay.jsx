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

  // function srcset(image, size, rows = 1, cols = 1) {
  //   return {
  //     src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
  //     srcSet: `${image}?w=${size * cols}&h=${
  //       size * rows
  //     }&fit=crop&auto=format&dpr=2 2x`,
  //   };
  // }

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
      <ImageList
        sx={{ width: "100%", height: "100vh" }}
        variant="woven"
        cols={3}
        gap={8}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=161&fit=crop&auto=format`}
              alt={item.title}
              onClick={() => handleImageClick(item.img)}
              style={{ width: "85%", height: "100%" }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <div>
        <ImageModal
          show={showModal}
          onHide={handleModalClose}
          imageSrc={selectedImage}
        />
      </div>
    </>
  );
}

export default pictureDisplay;
