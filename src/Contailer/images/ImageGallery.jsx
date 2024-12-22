import React from 'react';
import ImageCard from './image';  
import musicplayer from '../../Assects/images/Screenshot 2024-12-21 162209.png';
import AIsumm from '../../Assects/images/AI summ.png';
import shirts from '../../Assects/images/shirts.png';

const ImageGallery = () => {
  const images = [
    {
      url: musicplayer,
      redirectUrl: '#', 
      key: 'Music Player',
    },
    {
      url: AIsumm,
      redirectUrl: '#', 
      key: 'AI Summary',
    },
    {
      url: shirts,
      redirectUrl: '#', 
      key: 'Shirts',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
      {images.map((image, index) => (
        <ImageCard key={index} image={image} />
      ))}
    </div>
  );
};

export default ImageGallery;
