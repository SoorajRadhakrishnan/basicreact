import React from 'react';
import "./gallery.css";

import Rectangle21 from "./Rectangle 21.png"
import Rectangle22 from "./Rectangle 22.png"
import Rectangle23 from "./Rectangle 23.png"
import Rectangle24 from "./Rectangle 24.png"
import Rectangle25 from "./Rectangle 25.png"


const Gallery = () => {
  return (
    <div>
      <div className='gallerytext'>
        <div className='bar'></div>
        <h1>Gallery</h1>
      </div>
      <div className='gallerybody'>
        <div className="gallerybody-item">
      <img src={Rectangle21} alt="image" />
      <img src={Rectangle22} alt="image" />
      <img src={Rectangle23} alt="image" />
      <img src={Rectangle24} alt="image" />
      <img src={Rectangle25} alt="image" />
      </div>
      </div>
    </div>
  );
};

export default Gallery;
