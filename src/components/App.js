import React from "react";
import "./App.css";
import GridGallery from "./GridGallery";
import Popup from "./Popup";

function App() {
  const [cardData, setCardData] = React.useState({});
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  function handleImageClick(e) {
    setIsPopupOpen(true);
    setCardData(e.target.currentSrc);
  }

  function closePopup() {
    setIsPopupOpen(false);
  }

  return (
    <div className="app">
      <h1 className="app__header">grid gallery</h1>
      <GridGallery 
      onClick={handleImageClick}/>
      {isPopupOpen 
      ? <Popup 
      card={cardData}
      onClose={closePopup}
      /> : ""}
    </div>
  );
}

export default App;
