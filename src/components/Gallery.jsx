import React, { useState } from "react";

const Gallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(null);

  const openImage = (image) => {
    setCurrentImage(image);
  };

  const closeImage = () => {
    setCurrentImage(null);
  };

  return (
    <div>
      <h1>Gallery</h1>
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.thumbnailUrl}
            alt={image.altText}
            onClick={() => openImage(image)}
          />
        ))}
      </div>
      {currentImage && (
        <div className="image-modal">
          <img src={currentImage.imageUrl} alt={currentImage.altText} />
          <button onClick={closeImage}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
