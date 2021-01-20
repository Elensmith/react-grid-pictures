import React from 'react';
import close from "../images/close.svg";
import "./Popup.css"

function Popup(props) {

  return (
    <div className="popup">
      <div className="popup__image-container">
        <img src={props.card} alt="" style={{ width: '90vw', height: '90vh' }} />
        <img src={close} alt=""className="popup__close" onClick={props.onClose} />
      </div>
    </div>
  );
}

export default Popup;