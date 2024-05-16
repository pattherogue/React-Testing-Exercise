import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
function Carousel({ photos, title }) {
  const [currIndex, setCurrIndex] = useState(0);

  const goForward = () => {
    setCurrIndex(currIndex === photos.length - 1 ? 0 : currIndex + 1);
  };

  const goBackward = () => {
    setCurrIndex(currIndex === 0 ? photos.length - 1 : currIndex - 1);
  };

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i className={`bi bi-arrow-left-circle ${currIndex === 0 ? 'hidden' : ''}`} onClick={goBackward} />
        <Card photo={photos[currIndex]} currNum={currIndex + 1} totalNum={photos.length} />
        <i className={`bi bi-arrow-right-circle ${currIndex === photos.length - 1 ? 'hidden' : ''}`} onClick={goForward} />
      </div>
    </div>
  );
}

export default Carousel;
