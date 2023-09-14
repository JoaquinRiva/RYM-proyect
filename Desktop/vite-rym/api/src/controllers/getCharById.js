const axios = require("axios");

async function getCharById(req, res) {
  const URL = "https://rickandmortyapi.com/api/character/";

  try {
    const {id} = req.params;
    const {data} = await axios.get(`${URL}${id}`);

    const character = {
      id: data.id,
      status: data.status,
      name: data.name,
      species: data.species,
      location: data.location?.name,
      origin: data.origin?.name, // asi no hay undefined
      image: data.image,
      gender: data.gender,
    };

    character.name
      ? res.status(200).json(character)
      : res.status(404).json({message: "Not Found Coleguillas"});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

module.exports = getCharById;
