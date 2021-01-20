import React from "react";
import "./GridGallery.css"
import big_picture1 from "../images/big_picture1.jpg";
import big_picture2 from "../images/big_picture2.jpg";
import small_picture1 from "../images/small_picture1.jpg";
import small_picture2 from "../images/small_picture2.jpg";
import small_picture3 from "../images/small_picture3.jpg";
import small_picture4 from "../images/small_picture4.jpg";
import small_picture5 from "../images/small_picture5.jpg";
import small_picture6 from "../images/small_picture6.jpg";
import small_picture7 from "../images/small_picture7.jpg";
import small_picture8 from "../images/small_picture8.jpg";

function GridGallery(props) {
  return (
    <div className="gallery">
       <img src={big_picture1} alt="" className="gallery__image1" onClick={props.onClick}/>
       <img src={small_picture1} alt="" className="gallery__image2" onClick={props.onClick}/>
       <img src={small_picture2} alt="" className="gallery__image3"onClick={props.onClick}/>
       <img src={small_picture3} alt="" className="gallery__image4" onClick={props.onClick}/>
       <img src={small_picture4} alt="" className="gallery__image5" onClick={props.onClick}/>
       <img src={big_picture2} alt="" className="gallery__image6" onClick={props.onClick}/>
       <img src={small_picture5} alt="" className="gallery__image7" onClick={props.onClick}/>
       <img src={small_picture6} alt="" className="gallery__image8" onClick={props.onClick}/>
       <img src={small_picture7} alt="" className="gallery__image9" onClick={props.onClick}/>
       <img src={small_picture8} alt="" className="gallery__image10" onClick={props.onClick}/>
    </div>
  );
}

export default GridGallery;