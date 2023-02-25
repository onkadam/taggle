import "./styles.css";
import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        {show ? "Hidden element bellow" : "Show element bellow"}
      </button>
      {show && <div>taggle challange</div>}
    </div>
  );
}
