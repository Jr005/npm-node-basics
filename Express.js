// CODING PHASE  COURSE NAME - "CREATE OUR FIRST SERVER"

// importing express
const express = require("express");

// run express on "app" variable
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>HI This is my first page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

app.get("/gallery", (req, res) => {
  res.send("<h1>HI Gallery</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

app.get("/gallery", (req, res) => {
  res.send("<h1>HI Gallery</h1>");
});

app.listen(3000, () => {
  console.log(
    "Server is running on http://www.localhost:3000/ to stop server press control+c"
  );
});
