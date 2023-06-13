import React, {useState} from 'react';
import StaticImg from '../assets/imgs/product.webp';

const ImageComponent = ({src = "", alt, clx = "", fallbackSrc = StaticImg}) => {
   const [imageSrc, setImageSrc] = useState(src);

   const handleImageError = () => {
      setImageSrc(fallbackSrc);
   };

   return <img className={clx} src={imageSrc} alt={alt} onError={handleImageError}/>;
};

export default ImageComponent;