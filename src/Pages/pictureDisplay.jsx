import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
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
    <Box sx={{ width: 700, height: 450, overflowY: "scroll" }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default pictureDisplay;
