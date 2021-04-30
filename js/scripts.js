function add(score1, score2, score3, score4, score5) {
    return score1 + score2 + score3 + score4 + score5;
}

$(document).ready(function() {
    $("form#form").submit(function(event) {
        event.preventDefault();
        console.log("button clicked.") //debug
        let score1 = parseInt($("#color").val());
        let score2 = parseInt($("#food").val());
        let score3 = parseInt($("#country").val());
        let score4 = parseInt($("#movie").val());
        let score5 = parseInt($("#sport").val());

        let finalScore = add(score1, score2, score3, score4, score5);

        console.log(score1); //debug
        console.log(score2); //debug
        console.log(score3);
        console.log(score4);
        console.log(score5);
        console.log(finalScore); //debug
        

        

        if (finalScore >= 1) {
            $(".c_sharp").show();
        }


    });
});