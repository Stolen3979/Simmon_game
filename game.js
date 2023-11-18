var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started=false;

$(document).keypress(function(){
    if(!started){
        nextSquence();
        started = true;
    }
});






function nextSquence()
{
    userClickedPattern=[];
    level += 1;
    var randomNumber = Math.floor(Math.random()*3 +1);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    animatePress(randomChosenColour)
    playSound(randomChosenColour);
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



function animatePress(currentColor){
    $("#"+currentColor).toggleClass("pressed",100).toggleClass("pressed",100);
}
function playSound(name){
    var audio = new Audio("sounds/"+ name+".mp3");
    audio.play();
}