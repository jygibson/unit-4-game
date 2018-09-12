$(document).ready(function () {

    //computer picks random target number of diamonds and logs it to the console
    var targetNumber = Math.floor((Math.random() * 101) + 19);
    console.log(targetNumber);

    //sets some variables for the counter, wins, and losses

    var counter = 0;
    var wins = 0;
    var losses = 0;

    // //puts the targetNumber into the random-number span on the html

    $("#random-number").text(targetNumber);

    //creates an array of images
    var diamonds = ["assets/images/bluediamond.jpg", "assets/images/diamond.jpg", "assets/images/pinkdiamond.jpg", "assets/images/purplediamond.jpg"];


    //function uses the array to place 4 images and assign each a random number
    function displayDiamondImages() {
        for (var i = 0; i < diamonds.length; i++) {
            var randomValue = Math.floor(Math.random() * 12) + 1;
            $("#alldiamonds").append('<img class="diamond" src="' + diamonds[i] + '" data-diamond-value="' + randomValue + '" width="200px">');
        }
    };
    //calls the function above
    displayDiamondImages();

    // reset function we will call in our if else statements
    function resetGame() {
        targetNumber = Math.floor((Math.random() * 101) + 19);
        console.log(targetNumber);
        $("#random-number").text(targetNumber);
        randomValue = (Math.floor(Math.random() * 12) + 1);
        counter = 0;
        $("#total").text("0");
    };

    //on click event to handle the click event - creating the diamondValue and adding it to the counter. Fills in the total 
    //field in the html with the counter value
    $("#alldiamonds").on("click", '.diamond', function () {
        var diamondValue = parseInt($(this).attr("data-diamond-value"));
        counter += diamondValue;
        console.log(counter)
        $("#total").text(counter);
        //conditional statements for scoring
        if (counter == targetNumber) {
            alert("you win, girl. get yourself something shiny.");
            wins++;
            $("#wins").text(wins);
            resetGame();
        }
        else if (counter > targetNumber) {
            alert("you lose. earn more money. bye");
            losses++;
            $("#losses").text(losses);
            resetGame();
        };
    });


    // //updates all the text fields
    //puts the targetNumber into the random-number span on the html

    // $("#random-number").text(targetNumber);
    // $("#wins").text(wins);
    // $("#losses").text(losses);

});
