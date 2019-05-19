$(".change-devoured").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    $.ajax({
        method: "PUT",
        url: "/api/burgers/" + id,
        data: {
            devoured: newDevoured
        }
    }).then(
        function () {
            location.href = '/';
        }
    );
});

$(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
        name: $("#burgerName").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
    };
    // Send the POST request.
    $.post("/api/burgers", newBurger, function () {
        console.log(newBurger);
    }).then(() => {
        console.log(newBurger);
        location.reload();
    });
});



