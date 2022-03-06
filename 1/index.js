const express = require("express");
const app = express();
const bodyParser = require("body-parser");

let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));

app.get("/news/:id", function (req, res) {
  var obj = {
    title: "Новость",
    id: 4,
    paragraphs: ["Параграф", "Обычный текст", "Числа: 2, 4, 6", 99],
  };
  console.log(req.query);
  res.render("news", { newsId: req.params.id, obj: obj });
});

app.get("/", (req, res) => {
  res.render("index");
});
app.post("/index-success", urlencodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  res.render("index-success", { data: req.body });
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/contacts", (req, res) => {
  res.render("contacts");
});
app.get("/features", (req, res) => {
  res.render("features");
});
app.get("/pricing", (req, res) => {
  res.render("pricing");
});
app.get("/reviews", (req, res) => {
  res.render("reviews");
});

app.listen(3000);
