$(document).ready(function() {
    $("form#form").submit(function(event) {
        event.preventDefault();
        console.log("button clicked.") //debug
        let language = $("#language").val();

        console.log(language); //debug




    });
});