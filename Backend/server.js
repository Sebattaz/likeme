const express = require("express");
const { getData, postData } = require("./consultas");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.listen(3000, () => console.log("Servidor Levantado"));

app.get("/posts", async (req, res) => {
  const likes = await getData();

  res.json(likes);
});

app.post("/posts", async (req, res) => {
  const { titulo, img, descripcion, likes } = req.body;
  await postData(titulo, img, descripcion, likes);
  res.send("LIKE AGREGADO");
});
