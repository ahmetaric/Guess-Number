const enter = document.querySelector("#enter");
const restart = document.querySelector("#restart");
const output = document.querySelector(".outputext");
const start = document.querySelector(".start");
const end = document.querySelector(".end");
const heart = document.querySelector(".heart");
const between = document.querySelector(".between");
const heartNumber = document.querySelector(".heart-number");
const random = Math.floor(Math.random() * 100 + 1);
let life = 10;

const guessGame = function () {
  if (life > 1) {
    let guess = document.querySelector("#input").value;
    if (guess < 0 || guess > 100) {
      output.innerHTML = "Please enter a number between 1 and 100";
    } else {
      if (guess == random) {
        output.innerHTML = `You guessed the number ${guess}!`;
        output.style.fontSize = "2rem";
        document.querySelector("body").style.backgroundColor = "green";
        restart.style.display = "inline-block";
        enter.disabled = true;
        heart.innerText = "Congratulations! You won! 🎯 ";
        heart.style.color = "green";
        heart.style.fontSize = "2.5rem";
        input.style.display = "none";
        between.style.display = "none";
      } else if (guess > random) {
        output.innerHTML = "Your guess is too high";
        end.innerText = guess;
        life--;
        heartNumber.innerText = life;
        input.value = "";
        
      } else if (guess < random) {
        output.innerHTML = "Your guess is too low";
        start.innerText = guess;
        life--;
        heartNumber.innerText = life;
        input.value = "";
      }
    }
  } else {
    output.innerHTML = "You have no more hearts ⛔";
    output.style.color = "red";
    //   output.style.fontSize = "2rem";
    enter.disabled = true;
    restart.style.display = "inline-block";
    document.querySelector("body").style.backgroundColor = "red";
    heart.style.display = "none";
    input.style.display = "none";
    between.innerHTML = "GAME OVER";
    between.style.fontSize = "3rem";
    between.style.color = "red";
  }
  
};

enter.addEventListener("click", guessGame);
input.addEventListener("keydown", function (e) {
  if (e.keyCode == 13) {
    guessGame();
  }
});

// input.addEventListener("keydown",function(e){
//     if(e.keyCode == 3){
//        window.location.reload();
//     }
// })
