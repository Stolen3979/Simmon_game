


var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
<<<<<<< HEAD
var started=false;

$(document).keypress(function(){
    if(!started){
        nextSquence();
        started = true;
    }
});


=======



// if (gamePattern.length <=0){alert(gamePattern.length);}
//     else {
//         alert("check");
//     }
$(document).keypress(nextSquence);

>>>>>>> a70c688a883326bd115b37f15b86a1cc6e8fb782




<<<<<<< HEAD
function nextSquence()
{
    userClickedPattern=[];
    level += 1;
    var randomNumber = Math.floor(Math.random()*3 +1);
    var randomChosenColour = buttonColours[randomNumber];
=======
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
>>>>>>> a70c688a883326bd115b37f15b86a1cc6e8fb782
    gamePattern.push(randomChosenColour);
    animatePress(randomChosenColour)
    playSound(randomChosenColour);
<<<<<<< HEAD
    $("#level-title").text("Level "+ level);
    
}
$(".btn").on("click", function() {
  animatePress(this.id);
    playSound(this.id);
    userClickedPattern.push(this.id);
    checkAnswer(userClickedPattern.length-1);
});
function checkAnswer(currentLevel){
if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    // console.log("success");
    if (userClickedPattern.length===gamePattern.length){
        setTimeout(function(){
            nextSquence();
        },1000);
    }
}else{
    playSound('wrong');
    $('body').toggleClass('game-over',200).toggleClass('game-over',200);
    $("#level-title").text("Level Game Over, Press Any Key to Restart");
    // console.log('wrong');
}
}
=======
    $("h1").text("Level "+ level);
    
}
$(".btn").on("click", function() {
  $("#"+this.id).toggleClass('pressed', 100).toggleClass('pressed', 100);
    playSound(this.id);
    userClickedPattern.push(this.id);
    checkAnswer(userClickedPattern.length);
});
function checkAnswer(currentLevel){

}
>>>>>>> a70c688a883326bd115b37f15b86a1cc6e8fb782



function animatePress(currentColor){
    $("#"+currentColor).toggleClass("pressed",100).toggleClass("pressed",100);
}
function playSound(name){
<<<<<<< HEAD
    var audio = new Audio("sounds/"+ name+".mp3");
    audio.play();
}
=======
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
>>>>>>> a70c688a883326bd115b37f15b86a1cc6e8fb782
