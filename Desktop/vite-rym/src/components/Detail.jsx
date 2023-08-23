import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"; // Importa useEffect

export default function Detail() {
  const [character, setCharacter] = useState({}); // Utiliza setCharacter en lugar de setCharacters
  const { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return () => {
      setCharacter({}); // Limpia el estado cuando el componente se desmonta
    };
  }, [id]);

  return (
    <div>
      <h1>Name: {character.name}</h1>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin && character.origin.name}</p> {/* Cuidado con acceder a nested properties */}
      <img src={character.image} alt={character.name} />
    </div>
  );
}
