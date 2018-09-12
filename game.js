$(document).ready(function() {

    //computer picks random target number of diamonds and logs it to the console
var targetNumber = Math.floor((Math.random() * 101)+ 19);

console.log(targetNumber);

//sets some variables for the counter, wins, and losses

var counter = 0;
var wins = 0;
var losses = 0;

//puts the targetNumber into the random-number span on the html

$("#random-number").text(targetNumber);

//creates an array of images
var diamonds = ["assets/images/bluediamond.jpg", "assets/images/diamond.jpg", "assets/images/pinkdiamond.jpg", "assets/images/purplediamond.jpg"];

//function uses the array to place 4 images and assign each a random number
function displayDiamondImages (){
    for (var i = 0; i < diamonds.length; i++){
        var randomValue = Math.floor(Math.random() * 12);
        $("#alldiamonds").append('<img class="diamond" src="' + diamonds[i] + '" data-diamond-value="'+ randomValue +'" width="200px">');
    }
};
//calls the function above
displayDiamondImages();

//on click event to handle the click event - creating the diamondValue and adding it to the counter. Fills in the total 
//field in the html with the counter value
$("#alldiamonds").on("click", '.diamond', function() {
    var diamondValue = parseInt($(this).attr("data-diamond-value"));
    counter += diamondValue;
    console.log(counter)
    $("#total").text(counter);
  });

  // reset function we will call in our if else statements
  function reset(){
    targetNumber = Math.floor((Math.random() * 101)+ 19);
    randomValue = Math.floor(Math.random() * 11) +1;
    counter = 0;
 }

 //conditional statements for scoring
if (counter === targetNumber) {
    alert("you win, girl. get yourself something shiny.");
    wins++;
    reset();
}

else if (counter >= targetNumber) {
    alert("you lose. earn more money. bye");
    losses++;
    reset();
};

//updates all the text fields
$("#total").text(counter);
$("#wins").text(wins);
$("#losses").text(losses);

});
