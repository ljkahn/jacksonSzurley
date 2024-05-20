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
import bikeTire from "../assets/workPhotos/bikeTire.jpg";
import Drive from "../assets/workPhotos/drive.jpg";
import Drive1 from "../assets/workPhotos/drive1.jpg";
import Flannel from "../assets/workPhotos/flannel.jpg";
import Flannel1 from "../assets/workPhotos/flannel1.jpg";
import Light from "../assets/workPhotos/light.jpg";
import Mountains from "../assets/workPhotos/mountains.jpg";
import Mountains1 from "../assets/workPhotos/mountains1.jpg";
import Pump from "../assets/workPhotos/pump.jpg";
import Sam from "../assets/workPhotos/sam.jpg";
import Sam1 from "../assets/workPhotos/sam1.jpg";
import Sam2 from "../assets/workPhotos/sam2.jpg";
import Sam3 from "../assets/workPhotos/sam3.jpg";
import Tire from "../assets/workPhotos/tire.jpg";
import Tree1 from "../assets/workPhotos/tree1.jpg";
import Truck from "../assets/workPhotos/truck.jpg";
import Up from "../assets/workPhotos/up.jpg";
import Up1 from "../assets/workPhotos/up1.jpg";

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
    {
      img: bikeTire,
      title: "Coffee table",
    },

    {
      img: Drive,
      title: "Coffee table",
    },
    {
      img: Drive1,
      title: "Coffee table",
    },

    {
      img: Flannel,
      title: "Coffee table",
    },
    {
      img: Flannel1,
      title: "Coffee table",
    },
    {
      img: Light,
      title: "Coffee table",
    },
    {
      img: Mountains,
      title: "Coffee table",
    },

    {
      img: Mountains1,
      title: "Coffee table",
    },
    {
      img: Pump,
      title: "Coffee table",
    },
    {
      img: Sam,
      title: "Coffee table",
    },
    {
      img: Sam1,
      title: "Coffee table",
    },

    {
      img: Sam2,
      title: "Coffee table",
    },
    {
      img: Sam3,
      title: "Coffee table",
    },
    {
      img: Tire,
      title: "Coffee table",
    },

    {
      img: Tree1,
      title: "Coffee table",
    },

    {
      img: Truck,
      title: "Coffee table",
    },
    {
      img: Up,
      title: "Coffee table",
    },
    {
      img: Up1,
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
