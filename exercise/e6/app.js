const express = require("express");
const path = require("path");
const crypto = require("crypto");
const PORT = 4000;
const createDB = require("./db.js");
const promisify = require("util").promisify;

let db;
createDB()
  .then(newDB => {
    db = newDB;
    console.log("Connected to DB!");
  })
  .catch(err => {
    throw new Error(err);
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/join", (req, res) => {
  res.sendFile(path.join(__dirname + "/join.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname + "/login.html"));
});

app.post("/processJoin", async (req, res) => {
  const { id, pw1, pw2 } = req.body;
  console.log({ id, pw1, pw2 });

  if (pw1 !== pw2) {
    console.log("Password doesn't match!");
    res.redirect("/join");
  } else {
    const user = db
      .get("users")
      .find({ id: id })
      .value();
    if (user === undefined) {
      const newUser = await db
        .get("users")
        .push({
          id: id,
          password: pw1
        })
        .write();
      console.log({ newUser });
    } else {
      console.log("Alredy joined!");
      res.redirect("/join");
    }
  }
});

app.post("/processLogin", (req, res) => {
  const { id, pw } = req.body;
  const user = db
    .get("users")
    .find({ id: id })
    .value();
  if (user === undefined) {
    console.log("No such user!");
    res.redirect("/login");
  } else {
    if (user.password !== pw) {
      console.log("Invalid password!");
      res.redirect("/login");
    } else {
      const msg = `Welcome ${user.id}!`;
      console.log(msg);
      const html = `
        <head>
          <meta charset="UTF-8" />
          <title>Users</title>
          <link rel="stylesheet" href="style.css" />
        </head>
        <body>
          <span>${msg} </span>
          <a href="/">돌아가기</a>
        </body>`;
      res.send(html);
    }
  }
});

app.listen(PORT, () => {
  console.log(`Listening on: http://localhost:${PORT}`);
});
