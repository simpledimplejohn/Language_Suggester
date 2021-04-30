function add(score1, score2) {
    return score1 + score2;
}

$(document).ready(function() {
    $("form#form").submit(function(event) {
        event.preventDefault();
        console.log("button clicked.") //debug
        let score1 = parseInt($("#color").val());
        let score2 = parseInt($("#food").val());
        let finalScore = add(score1, score2);

        console.log(score1); //debug
        console.log(score2); //debug
        console.log(finalScore); //debug
        

        

        if (finalScore >= 1) {
            $(".c_sharp").show();
        }


    });
});