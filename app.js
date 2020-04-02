const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const compression = require("compression");
const uniqid = require("uniqid");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());

let cats = [];

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Your connection is ready. Beat you cats!"
  });
});

app.get("/cats", (req, res) => {
  let catList = cats.length;

  if (catList === 0) {
    res.status(404).json({
      message: "Aww snap! You have no cats anyway!",
      data: []
    });
  } else {
    res.status(200).json({
      message: `Conrats! you have ${catList} cats so far`,
      data: cats
    });
  }
});

app.post("/cats", (req, res) => {
  let newCat = {
    id: uniqid.process(),
    name: req.body.name
  };

  cats.push(newCat);

  res.status(201).json({
    message: "Conrats! you have added 1 new cat",
    data: newCat
  });
});

app.put("/cats", (req, res) => {
  let [selectedCat] = cats.filter(cat => cat.id === req.body.id);
  let oldName = selectedCat.name;
  let newName = req.body.name;

  selectedCat.name = req.body.name;

  cats = cats.filter(cat => cat.id !== req.body.id);
  cats.push(selectedCat);

  res.status(200).json({
    message: `You have just changed name of cat ${oldName} to ${newName}!`
  });
});

app.delete("/cats", (req, res) => {
  let [removedCat] = cats.filter(cat => cat.id === req.body.id);

  cats = cats.filter(cat => cat.id !== req.body.id);

  res.status(200).json({
    message: `Successed to remove ${removedCat.name} :'(`
  });
});

app.listen(port, () => {
  console.log(`app listen on port ${port}`);
});
