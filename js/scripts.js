$(document).ready(function() {
    $("form#form").submit(function(event) {
        event.preventDefault();
        console.log("button clicked.") //debug
        let language = $("#color").val();
        console.log(language); //debug
        
        if (language == 'red') {
            $(".c_sharp").show();
        }
        if (language == 'blue') {
            $(".go").show();
        }
        if (language == 'brown') {
            $(".javascript").show();
        }
        if (language == 'yellow') {
            $(".ruby").show();
        }
        if (language == 'green') {
            $(".rust").show();
        }
        if (language == 'orange') {
            $(".swift").show();
        }


    });
});