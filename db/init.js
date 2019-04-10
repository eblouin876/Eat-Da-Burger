let Database = require("../config/orm");

async function init() {
  let burgers_db = new Database("burgers_db");
  console.log("Here");
  await burgers_db
    .makeTable("burgers", {
      id: "INT NOT NULL AUTO_INCREMENT PRIMARY KEY",
      burger: "VARCHAR(50)",
      devoured: "VARCHAR(5)"
    })
    .catch(err => console.log(err));
  console.log("Here");

  burgers_db
    .create("burgers", { burger: "Ghost Chili Burger", devoured: false })
    .catch(err => console.log(err));
  console.log("Here");

  burgers_db
    .create("burgers", {
      burger: "Sauteed Onion and Mushroom Burger",
      devoured: false
    })
    .catch(err => console.log(err));
  console.log("Here");

  burgers_db
    .create("burgers", {
      burger: "Black Bean and Quinoa Burger",
      devoured: false
    })
    .catch(err => console.log(err));
  console.log("Here");

  burgers_db.read("burgers", "*").then(res => console.log(res));
}

init();
