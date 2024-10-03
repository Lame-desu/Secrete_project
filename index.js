//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

let __dirname = dirname(fileURLToPath(import.meta.url));
let result = false;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(checkPassword);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (result) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});

function checkPassword(req, res, next) {
  let password = req.body.password;
  if (password == "ILoveProgramming") {
    result = true;
  }
  next();
}
