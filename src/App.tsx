import "./App.css";
import { Animals } from "./components/Animals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Animals />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
