const axios = require("axios");

function getCharById(req, res) {
  const {id} = req.params;
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      const {id, status, name, species, origin, image, gender} = response.data;
      name
        ? res
            .status(200)
            .json({id, status, name, species, origin, image, gender})
        : res.status(404).send("Not Found Coleguillas");
    })
    .catch((error) => {
      res.status(500).json({message: error.message});
    });
}

module.exports = getCharById;
