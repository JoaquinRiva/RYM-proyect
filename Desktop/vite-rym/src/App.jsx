import {useState} from "react";
import axios from "axios";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";




function App() {
  const [characters, setCharacters] = useState([]);


  function searchHandler(id) {
    axios(
      `https://rym2-production.up.railway.app/api/character/${id}?key=henrym-hx-gcamey`
    ).then(({data}) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  }

  function closeHandler(id) {
    // nos llega un string
    let filteredCharacters = characters.filter(
      (character) => character.id !== Number(id)
    );

    setCharacters(filteredCharacters);
  }

  function randomHandler() {
    let memoria = [];

    let randomId = (Math.random() * 826).toFixed();

    randomId = Number(randomId);

    if (!memoria.includes(randomId)) {
      memoria.push(randomId);
      searchHandler(randomId);
    } else {
      alert("Ese personaje ya fue agregado");
      return;
    }
  }

  return (
    <div className="App">
      
        <Nav onSearch={searchHandler} randomize={randomHandler} />
        <Routes>
          <Route path="/home" element={<App/>}/>
          <Route path="/" element={<Cards characters={characters} onClose={closeHandler} />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          
        </Routes>
      
    </div>
  );
}

export default App;
