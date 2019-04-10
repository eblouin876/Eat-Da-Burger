let Database = require("../config/orm");

module.exports = {
  burger_db: new Database("burgers_db"),
  addBurger: function(burger) {
    this.burger_db.create("burgers", burger).catch(err => console.log(err));
  },
  eatBurger: function(burger) {
    this.burger_db
      .update("burgers", { devoured: true }, { burger: burger.burger })
      .catch(err => console.log(err));
  },
  getBurgers: function() {
    return this.burger_db.read("burgers", "*").catch(err => console.log(err));
  }
};
