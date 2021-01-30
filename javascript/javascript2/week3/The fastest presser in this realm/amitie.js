const button = document.querySelector('btn');
const selectInput = document.querySelector('input');
const keyS = document.querySelector('S');
const keyL = document.querySelector('L');
const textS = document.getElementById('text_S');
const textL = document.getElementById('text_L');

const starter = (event => {

    if (selectInput.value) {
        if (event.keyCode === 'keyS') {
            countS++;
            return (keyS.textContent = countS);
        }
       else if (event.keyCode === 'keyL') {
           countL++;
           return (keyL.textContent = countL);
       }
}

});

function func () {
    if (countS > countL) {
        textS.textContent = 'userS is faster!';
    } else if (countS < countL) {
         textL.textContent = 'userL is faster!';
    } else if ((countS = countL)) {
        textS.textContent = ' try again!'; textL.textContent = ' try again!';
    }
    document.removeEventListener('keypress', starter);
}

let countS = 0;
let countL = 0;

   btn.addEventListener('keypress', timer => {
       timer = selectInput.value;
       console.log(timer);
       setTimeout(func, timer * 1000);
       document.addEventListener('keypress', starter);

       const lancer = document.getElementById('start-count');
       function myStarter () {
           timer --;
           lancer.textContent = `${timer} seconds left`;
           if (timer === 0) {
               clearInterval (time);
           }
       }
       const time = setInterval (myStarter, 1000);
   
