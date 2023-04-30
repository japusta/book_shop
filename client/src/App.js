import React from "react";
import "./style/style.css"
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import AddBook from "./pages/AddBook";
import Books from "./pages/Books";
import UpdateBook from "./pages/UpdateBook";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books/>}/>
          <Route path="/add" element={<AddBook/>}/>
          <Route path="/update/:id" element={<UpdateBook/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
