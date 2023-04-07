import React from "react";
import useSound from 'use-sound';
import ringer from "./flipdish-ringer.mp3";
import "./styles.css";

const Sound = () => {
  const audio = new Audio(ringer);
  audio.loop = true;

  return (
    <div>
      <button
        onClick={() => {
          audio.loop = true;
          audio.play();
        }}
      >
        Play
      </button>
      <button onClick={() => (audio.loop = false)}>Pause</button>
    </div>
  );
};

//const rootElement = document.getElementById("root");
//ReactDOM.render(<Sound />, rootElement);
export default Sound;