import { useState } from "react";
import "./App.css"; // Ensure App.css is included

function App() {
  const [color, setColor] = useState("olive");

  function red(){
    setColor("");
  }
  return (
    <div
      className="app-container"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color,
        transition: "background-color 0.3s ease",
      }}
    >
      <h1 style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}>
        Background Color: {color}
      </h1>
      <div className="button-container" style={{ marginTop: "20px" }}>
        <button className="" style={{ background: "className" }} onClick={red}>
          Red
        </button>
        <button className="color-button" style={{ background: "green" }} onClick={() => setColor("green")}>
          Green
        </button>
        <button className="color-button" style={{ background: "blue" }} onClick={() => setColor("blue")}>
          Blue
        </button>
        <button className="color-button" style={{ background: "yellow", color: "black" }} onClick={() => setColor("yellow")}>
          Yellow
        </button>
        <button className="color-button" style={{ background: "orange" }} onClick={() => setColor("orange")}>
          Orange
        </button>
      </div>
    </div>
  );
}

export default App;
