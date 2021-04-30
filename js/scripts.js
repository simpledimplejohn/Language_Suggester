$(document).ready(function() {
    $("form#language").submit(function(event) {
        event.preventDefault();
        console.log("button clicked.");
        const name1 = $('#name').val();
        console.log(name1);
        const language1 = $('#language').val();
        console.log(language1);
    });
});