


var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;



// if (gamePattern.length <=0){alert(gamePattern.length);}
//     else {
//         alert("check");
//     }
$(document).keypress(nextSquence);





// if(gamePattern.length>0){
//     for (var i = 0;i<= gamePattern.length-1;i++){
//         // if(gamePattern[i] != userClickedPattern[i]){
//             // 
//         // };
//     playSound(gamePattern[i]);
//     }
// } 
// else {

// }
function nextSquence()
{
    level += 1;
    var randomNumber = Math.floor(Math.random()*3 +1);
    var randomChosenColour = buttonColours[randomNumber];
    $("#"+randomChosenColour).toggleClass('pressed', 100).toggleClass('pressed', 100);
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    $("h1").text("Level "+ level);
    
}
$(".btn").on("click", function() {
  $("#"+this.id).toggleClass('pressed', 100).toggleClass('pressed', 100);
    playSound(this.id);
    userClickedPattern.push(this.id);
});




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
