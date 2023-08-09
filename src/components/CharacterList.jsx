import React, { useEffect, useState } from "react";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data));
  }, []);
  if (!characters.results) {
    return null;
  }

  return (
    <div className="charactersList">
      <h3>Rick and Morty Characters List</h3>
      {characters.results.map((character) => (
        <div key={character.id}>
          <h5>{character.name}</h5>
          <img src={character.image} alt="error" />
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
