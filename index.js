


$(".btn").click(function(){
    var randomNumber1=Math.floor((Math.random()*6)+1);
    var randomNumber2=Math.floor((Math.random()*6)+1);
    var src1="images/dice"+randomNumber1+".png";
    var src2="images/dice"+randomNumber2+".png";
    $(".img").fadeOut(300).fadeIn(300);
    var audio = new Audio('sounds/audio.mp3');
    audio.play();
    document.querySelectorAll("img")[0].setAttribute("src",src1);
    document.querySelectorAll("img")[1].setAttribute("src",src2);
    if(randomNumber1>randomNumber2)
    {
        document.querySelector('h1').innerHTML="player1 wins✌";
    
    }
    else if(randomNumber2>randomNumber1)
    {
        document.querySelector('h1').innerHTML="player2 wins✌";
    }
    else
    {
        document.querySelector('h1').innerHTML="drawww match";
    }
var activeButton = document.querySelector(".button");

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

});
