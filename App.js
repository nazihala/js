import React from 'react';
import './App.css';
import imagesrc from "./imageInsrc.jpg";
import './style.css';
function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1 black', maxWidth:"100vw"}}>
        <h1 className={"title red"}>Naziha LAHRACH</h1>
        <br />
        <img src={imagesrc}/> <br />
        <img src="/imagep.jpg"/> <br />
        <iframe width="320" height="240" src="https://www.youtube.com/embed/ScDWrogElmo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
      </div>
    </div>

  );
};

export default App;

