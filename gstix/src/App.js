import React from 'react';
import './App.css';
import './Gallery/Gallery.css';
import Header from './Header/Header';
import Gallery from './Gallery/Gallery';
import Item from './Item/Item';
import './Item/Item.css';

function App() {
  
  return (
    <div className="App">
      <Header />

      <Gallery className="gallery" name="Executive_collection" >
        <Item className = "gallery_item" id="item_0"></Item>
        <Item className = "gallery_item" id="item_1"></Item>
        <Item className = "gallery_item" id="item_2"></Item>
        <Item className = "gallery_item" id="item_3"></Item>
        <Item className = "gallery_item" id="item_4"></Item>
        <Item className = "gallery_item" id="item_5"></Item>
      </Gallery>
      <Gallery className="gallery" name="Green_collection" />
      <Gallery className="gallery" name="Bronze_collection" />
      <Gallery className="gallery" name="Turbo_collection" />
    </div>
  );
}

export default App;
