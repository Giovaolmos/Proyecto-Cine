const {Router} = require("express");
const moviesController = require("../controllers/index");
const { validarDatosMiddleware } = require("../middlewares/middlewares");

const router = Router();

router.get("/movies",moviesController.getMovies);
router.post("/movies",validarDatosMiddleware ,moviesController.createMovie)

module.exports = router;