let express = require("express");
let burger = require("../models/burger");
let router = express.Router();
let log = require("con-logger");

router.get("/", async function(req, res) {
  let burgers = await burger.getBurgers();
  log(burgers);
  for (let key in burgers) {
    if (burgers[key].devoured === 0) {
      burgers[key].devoured = false;
    } else {
      burgers[key].devoured = true;
    }
  }
  res.render("index", { burgers });
});

router.post("/api/burgers", async function(req, res) {
  log(req.body);
  await burger.addBurger(req.body);
  res.redirect("/");
});

router.put("/api/burgers/:name", async function(req, res) {
  log(req.params.name);
  burger.eatBurger({ burger: req.params.name }).then(function(data) {
    log(data);
    res.redirect("/");
  });
});

module.exports = router;
