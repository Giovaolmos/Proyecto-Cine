
const renderCards = require("./renderCards");
const axios = require("axios");

const fetchPeliculas = async function(){
  try{
    const response = await axios.get("http://localhost:3000/movies");
    renderCards(response.data);
  }
  catch(error){
    throw new Error("Error al obtener las películas", error.message);
  }
}
fetchPeliculas();