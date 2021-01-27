import React from "react";
import "./GridGallery.css"
import photo_1 from "../images/photo_1.jpg";
import photo_2 from "../images/photo_2.jpg";
import photo_3 from "../images/photo_3.jpg";
import photo_4 from "../images/photo_4.jpg";
import photo_5 from "../images/photo_5.jpg";
import photo_6 from "../images/photo_6.jpg";
import photo_7 from "../images/photo_7.jpg";
import photo_8 from "../images/photo_8.jpg";
import photo_9 from "../images/photo_9.jpg";
import photo_10 from "../images/photo_10.jpg";

function GridGallery(props) {
  return (
    <div className="gallery">
       <img src={photo_9} alt="" className="gallery__image1" onClick={props.onClick}/>
       <img src={photo_2} alt="" className="gallery__image2" onClick={props.onClick}/>
       <img src={photo_3} alt="" className="gallery__image3"onClick={props.onClick}/>
       <img src={photo_4} alt="" className="gallery__image4" onClick={props.onClick}/>
       <img src={photo_5} alt="" className="gallery__image5" onClick={props.onClick}/>
       <img src={photo_6} alt="" className="gallery__image6" onClick={props.onClick}/>
       <img src={photo_7} alt="" className="gallery__image7" onClick={props.onClick}/>
       <img src={photo_8} alt="" className="gallery__image8" onClick={props.onClick}/>
       <img src={photo_1} alt="" className="gallery__image9" onClick={props.onClick}/>
       <img src={photo_10} alt="" className="gallery__image10" onClick={props.onClick}/>
    </div>
  );
}

export default GridGallery;