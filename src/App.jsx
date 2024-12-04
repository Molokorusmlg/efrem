import { useState } from "react";
import MyForm from "./componets/form/form";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <MyForm />;
}

export default App;
