var targetNumber =Math.floor((Math.random() * 120));

  console.log(targetNumber);

  $("#random-number").text(targetNumber);

  var counter = 0;

// var numberOptions = Math.floor((Math.random() * 12));
var diamonds = ["assets/images/bluediamond.jpg","assets/images/diamond.jpg","assets/images/pinkdiamond.jpg","assets/images/purplediamond.jpg"];
var count = 0;

function displayImage() {
for (var i=0; i<diamonds.length;i++){
    $("#alldiamonds").append("<img src=" + diamonds[count] + " width='200px'>");
    count++;
    $("img").attr("diamond-value", Math.floor((Math.random() * 12)));
 }};
  displayImage();

  $("#alldiamonds").on("click", function(){
var diamondValue = ($(this).attr("diamond-value"))
diamondValue= parseInt(diamondValue);
counter += diamondValue;
alert(counter);
console.log(counter)
  });


// for (var p=0; p<numberOptions.length; p++){
//     var pinkDiamond=$("<img>");
//     pinkDiamond.addClass("pink-diamond");
//     pinkDiamond.attr("src", "https://www.diamondportfolio.com.au/wp-content/uploads/2016/08/ic-what-pink-pink-1.jpg");
//     pinkDiamond.attr("pink-value", numberOptions[p]);
//     // $(".alldiamonds").append(pinkDiamond);
// }

// $("#pink-diamond").on("click", function() {
//     var pinkDiamondValue = ($(this).attr("pink-value"));
//     pinkDiamondValue = parseInt(pinkDiamondValue);
//     counter += pinkDiamondValue;
//     if (counter === targetNumber){
//         alert("you win");        
//     }
//     else if (counter >= targetNumber) {
//         alert("you lose");
//     }
// });
// for (var b=0; b<numberOptions.length; b++){
//     var blueDiamond=$("<img>");
//     blueDiamond.addclass("blue-diamond");
//     blueDiamond.attr("src", "../images/bluediamond.jpg")
//     blueDiamond.attr("blue-value", numberOptions[b]);
//     $(".alldiamonds").append(blueDiamond);
// }

// for (var d=0; i<numberOptions.length; d++){
//     var diamond=$("<img>");
//     diamond.addclass("diamond");
//     diamond.attr("src", "../images/diamond.jpg")
//     diamond.attr("diamond-value", numberOptions[d]);
//     $(".alldiamonds").append(diamond);
// }

// for (var l=0; l<numberOptions.length; l++){
//     var purpleDiamond=$("<img>");
//     purpleDiamond.addclass("purple-diamond");
//     purpleDiamond.attr("src", "../images/purplediamond.jpg")
//     purpleDiamond.attr("purple-value", numberOptions[l]);
//     $(".alldiamonds").append(purpleDiamond);
// }

