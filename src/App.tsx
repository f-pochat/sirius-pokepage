import React from 'react';
import './App.css';
import Home from "./components/screens/home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Pokemon from "./components/screens/pokemon/Pokemon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/:id' element={<Pokemon/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
