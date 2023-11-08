var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
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
 function nextSquence()
{

    var randomNumber = Math.floor(Math.random()*3 +1);
    var randomChosenColour = buttonColours[randomNumber];
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
   
    return gamePattern.push(randomChosenColour);
}


// nextSquence();
// gamePattern.push(nextSquence());


function playSound(name){
    switch(name){
        case "green":
            green= new Audio("../Simon Gmae Challenge Starting Files/sounds/green.mp3");
            green.play();
        break;
        case "red":
            red = new Audio("../Simon Gmae Challenge Starting Files/sounds/red.mp3");
            red.play();
        break;
        case "yellow":
            yellow = new Audio("../Simon Gmae Challenge Starting Files/sounds/yellow.mp3");
            yellow.play();
        break;
        case "blue":
            blue = new Audio("../Simon Gmae Challenge Starting Files/sounds/blue.mp3");
            blue.play();
        break;
        default:
            wrong = new Audio("../Simon Gmae Challenge Starting Files/sounds/wrong.mp3");
            wrong.play();
        break;

    }
}

if(gamePattern.length>0){
    for (var i = 0;i<= gamePattern.length-1;i++){
    playSound(gamePattern[i]);
    }
}
$(".btn").on("click",function() {
    userClickedPattern.push(this.id);
    $("#"+this.id+"").toggleClass(".pressed");
} );
$('.btn').on('click', function() {
     $("#"+this.id).toggleClass("pressed");
    });
// function animatePress(currentColour){
//    $('.btn').on('click', function() {
//      $("#"+this.id).toggleClass("pressed");
//     });
    
// }


