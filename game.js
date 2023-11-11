var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
// var start = false;
// $("#start").on("click", function() {
//    start = true;
// } );
// $("#end").on("click", function() {
//     start = false;
//  } );

// while(start === true){

//     
// for (var j=0;j<= gamePattern.length;j++){
//     if (gamePattern[j]!=userClickedPattern[j]){
//         start= false;
//     } else{
//         start = true;
//     }
// }
// }
$(document).keypress(function nextSquence()
{

    var randomNumber = Math.floor(Math.random()*3 +1);
    var randomChosenColour = buttonColours[randomNumber];
    $("#"+randomChosenColour).toggleClass('pressed', 100).toggleClass('pressed', 100);
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    $("h1").text("Level "+ level);
    level += 1;
});


// nextSquence();
// gamePattern.push(nextSquence());



if(gamePattern.length>0){
    for (var i = 0;i<= gamePattern.length-1;i++){
        // if(gamePattern[i] != userClickedPattern[i]){
            // 
        // };
    playSound(gamePattern[i]);
    }
}

$(".btn").on("click", function() {
  $("#"+this.id).toggleClass('pressed', 100).toggleClass('pressed', 100);
    playSound(this.id);
    userClickedPattern.push(this.id);
});

// $(".btn").on("click",function() {
//     userClickedPattern.push(this.id);
//     $("#"+this.id).toggleClass("pressed",2000);
// } );
// $('.btn').on('click', function() {
//      $("#"+this.id).toggleClass("pressed");
//     });
// function animatePress(currentColour){
//    $('.btn').on('click', function() {
//      $("#"+this.id).toggleClass("pressed");
//     });
    
// }


function playSound(name){
    switch(name){
        case "green":
            green= new Audio("./sounds/green.mp3");
            green.play();
        break;
        case "red":
            red = new Audio("./sounds/red.mp3");
            red.play();
        break;
        case "yellow":
            yellow = new Audio("./sounds/yellow.mp3");
            yellow.play();
        break;
        case "blue":
            blue = new Audio("./sounds/blue.mp3");
            blue.play();
        break;
        default:
            wrong = new Audio("./sounds/wrong.mp3");
            wrong.play();
        break;

    }
}
