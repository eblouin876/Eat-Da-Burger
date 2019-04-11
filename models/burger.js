let Database = require("../config/orm");
let log = require("con-logger");

module.exports = {
  burger_db: new Database("burgers_db"),
  addBurger: function(burger) {
    this.burger_db.create("burgers", burger).catch(err => console.log(err));
  },
  eatBurger: function(burger) {
    // return new Promise((resolve, reject) => {
    let devoured = { devoured: true };
    return this.burger_db
      .update("burgers", devoured, { burger: burger.burger })
      .then(() => {
        // resolve();
      })
      .catch(err => console.log(err));
    // });
  },
  getBurgers: function() {
    return this.burger_db.read("burgers", "*").catch(err => console.log(err));
  }
};
