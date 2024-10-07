const app = require("./src/server");
const conDB = require("./src/config/conDB");

conDB().then((res) => {
  app.listen(3000, () => {
    console.log("servidor escuchando puerto 3000");
  });
})
.catch(error => {
    throw new Error("Falló la conexión", error.message)
})