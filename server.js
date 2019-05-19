var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");


var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
);
app.set("view engine", "handlebars");

require("./routes/api_routes")(app);

var syncOptions = { force: false };



db.sequelize.sync(syncOptions).then(function () {
    app.listen(PORT || process.env.PORT, function () {
        console.log(
            "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
        );
    });
});

module.exports = app;
