let Database = require("../config/orm");

let burgers_db = "";
async function init() {
  burgers_db = new Database("burgers_db");
  await burgers_db.connect();

  burgers_db
    .query(
      "CREATE TABLE IF NOT EXISTS burgers_db.burgers (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, burger VARCHAR(50), devoured BOOLEAN DEFAULT false )"
    )
    .catch(err => console.log(err));

  await burgers_db
    .create("burgers", { burger: "Ghost Chili Burger" })
    .catch(err => console.log(err));

  await burgers_db
    .create("burgers", {
      burger: "Sauteed Onion and Mushroom Burger"
    })
    .catch(err => console.log(err));

  await burgers_db
    .create("burgers", {
      burger: "Black Bean and Quinoa Burger"
    })
    .catch(err => console.log(err));

  burgers_db.read("burgers", "*").then(res => console.log(res));
}

init();
