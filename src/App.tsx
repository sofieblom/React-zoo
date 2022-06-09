import "./App.css";
import { Animals } from "./components/Pages/Animals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShowAnimal } from "./components/Pages/ShowAnimal";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Animals />}></Route>
          <Route path="/animal/:id" element={<ShowAnimal />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
