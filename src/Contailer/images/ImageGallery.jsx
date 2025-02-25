import React from "react";
import ImageCard from "./image";
import { images } from "../../Data/DummyData";

const ImageGallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
      {images.map((image, index) => (
        <ImageCard key={index} image={image} />
      ))}
    </div>
  );
};

export default ImageGallery;
