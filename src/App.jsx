import { useState } from "react";
import MyForm from "./componets/form/form";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyForm></MyForm>
    </>
  );
}

export default App;
