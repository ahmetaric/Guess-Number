const enter = document.querySelector('#enter');
const restart = document.querySelector('#restart');
const output = document.querySelector(".outputext");
const random = Math.floor(Math.random() * 100 + 1);
let life = 5;



const guessGame=function(){
    if(life>0){
    let guess = document.querySelector('#input').value;
    if(guess < 0 || guess > 100){
        output.innerHTML = "Please enter a number between 1 and 100";
    }else{
        if(guess == random){
            output.innerHTML = "You guessed the number!";
        }else if(guess > random){
            output.innerHTML = "Your guess is too high";
            life--;
        }else if(guess < random){
            output.innerHTML = "Your guess is too low";
            life--;
        }

    }

    
}else{
    output.innerHTML = "You have no more hearts";
    
}
}

 


enter.addEventListener("click",guessGame);