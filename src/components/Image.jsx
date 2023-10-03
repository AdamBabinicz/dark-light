import React from "react";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../App.css";

const ImageGallery = () => {
  const images = [
    {
      original: "images/1.png",
      thumbnail: "images/1.png",
      description: "Opis obrazu 1",
    },
    {
      original: "images/2.jpg",
      thumbnail: "images/2.jpg",
      description: "Opis obrazu 2",
    },
    {
      original: "images/3.jpg",
      thumbnail: "images/3.jpg",
      description: "Opis obrazu 2",
    },
    // Dodaj więcej obrazów według potrzeb
  ];

  return (
    <div className="image-gallery-container">
      <div className="img">
        <Gallery items={images} />
      </div>
    </div>
  );
};

export default ImageGallery;
