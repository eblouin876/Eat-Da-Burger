let express = require("express");
let burger = require("../models/burger");
let router = express.Router();
let log = require("con-logger");

router.get("/", async function(req, res) {
  let burgers = await burger.getBurgers();

  for (let key in burgers) {
    if (burgers[key].devoured === 0) {
      burgers[key].devoured = false;
    } else {
      burgers[key].devoured = true;
    }
  }
  res.render("index", { burgers });
});

router.post("/api/burgers", function(req, res) {
  log(req.body);
});

router.put("/api/burgers/:name", function(req, res) {});

module.exports = router;
