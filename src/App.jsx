import { useState } from "react";
import Form1 from "./components/Form1";
import { Form2 } from "./components/Form2";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div>
        <Form1 />
      </div>
      <div>
        <Form2 />
      </div>
    </div>
  );
}

export default App;
