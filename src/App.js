import React, {useState} from "react";
import './App.css';
import { Callback } from "./callback";

//Pai
export default function App() {
  const [UIColor, setUIColor] = useState(null);

  //nossa funçao callback
  const getColorCallback=(color) => {
    setUIColor(color);
  }

  return (
    <div className="App">
      <div className="App_color_container"
      style={{ background: `${UIColor}` }}
      >
        <Callback getColor={getColorCallback} />
      </div>
    </div>
  );
}
