const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "123456",
  database: "likeme",
  allowExitOnIdle: true,
});

// CREATE DATABASE likeme;

// CREATE TABLE posts (
//     id SERIAL,
//     titulo VARCHAR(25),
//     img VARCHAR(1000),
//     descripcion VARCHAR(255),
//     likes INT
// );

const getData = async () => {
  const likes = await pool.query("SELECT * FROM posts");

  return likes.rows;
};

const postData = async (titulo, img, descripcion, likes)=>{
    const add = "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4)";
    const values = [titulo, img, descripcion, likes];
    const result = await pool.query(add, values);
    console.log("Dato insertado", result.rowCount);
}   


module.exports = { getData, postData };
