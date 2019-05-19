var db = require("../models");

module.exports = function (app) {
    app.get("/", function (req, res) {
        db.Burger.findAll({}).then(function (dbBurger) {
            var hbsObject = { burgers: dbBurger };
            res.render("index", hbsObject);
        });
    });


    app.post("/api/burgers", function (req, res) {
        db.Burger.create({
            burger_name: req.body.name,
            devoured: req.body.devoured
        }).then(function (dbBurger) {
            res.json(dbBurger);
        });
    });

    app.put("/api/burgers/:id", function (req, res) {
        var devouredState = req.body.devoured;
        db.Burger.update(
            {
                devoured: devouredState
            },
            {
                where: { id: req.params.id }

            }
        ).then((data) => {
            res.render('index');
        });
    });
};

