const express = require("express");
const { getData,postData } = require("./consultas");
const app = express();

app.use(express.json());

app.listen(3000, () => console.log("Servidor Levantado"));

app.get("/", async(req, res) =>{
    const  likes = await getData();

    res.json(likes);
})

app.post("/", async (req, res)=>{
    const {titulo, img, descripcion, likes} = req.body;
    await postData(titulo, img, descripcion, likes);
    res.send("LIKE AGREGADO");
});