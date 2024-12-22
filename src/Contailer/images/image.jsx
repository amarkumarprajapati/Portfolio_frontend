import React from 'react';

const ImageCard = ({ image }) => {
  return (
    <a
      href={image.redirectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <img
        src={image.url}
        alt={image.key}
        className="rounded-lg w-full h-auto object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-lg shadow-lg"
      />
    </a>
  );
};

export default ImageCard;
