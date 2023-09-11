const {Router} = require("express");
const login = require("../controllers/login");
const getCharById = require("../controllers/getCharById");
const {postFav, deleteFav} = require("../controllers/handleFavorites");

const mainRouter = Router();

mainRouter.get("/character/:id", getCharById);
mainRouter.get("/login", login);
mainRouter.post("/fav", postFav);
mainRouter.delete("/fav/:id", deleteFav);

module.exports = mainRouter;
