let express = require("express");
let burger = require("../models/burger");
let router = express.Router();

router.get("/", async function(req, res) {
  let burgers = await burger.getBurgers();
  console.log(burgers);
  res.render("index", { burgers });
});

router.post("/api/burgers", function(req, res) {});

router.put("/api/burgers/:name", function(req, res) {});

module.exports = router;
