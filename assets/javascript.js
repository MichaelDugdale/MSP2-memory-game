/* Code from https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/*/
//Declaring card data
const cardsArray = [{

        name: 'pokemon2',
        img: 'images/003.png',
    },
    {
        name: 'pokemon5',
        img: 'images/009.png',
    },
    {
        name: 'pokemon6',
        img: 'images/018.png',
    },
    {
        name: 'pokemon7',
        img: 'images/025.png',
    },
    {
        name: 'pokemon8',
        img: 'images/039.png',
    },
    {
        name: 'pokemon9',
        img: 'images/051.png',
    },
    {
        name: 'pokemon10',
        img: 'images/006.png',
    },
    {
        name: 'pokemon11',
        img: 'images/052.png',
    },
    {
        name: 'pokemon12',
        img: 'images/059.png',
    },
];

/*Declaring global variables*/
let firstGuess = "";
let secondGuess = "";
let count = 0;
let previousTarget = null;
let delay = 800;
let timerOn = false;
let moves = 0;
let second = 0,
    minute = 0;
let matchCount = 0;

/* Duplicate array to create a match for each card and randomize the order of the displayed cards*/
let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());

const game = document.getElementById("game");

const grid = document.createElement("section");
grid.setAttribute("class", "grid");
game.appendChild(grid);

/* looping through the card arry to display the images by creating divs for each item, code taken from https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/ */

gameGrid.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = item.name;

    /* creating the front and back of card so we can intially hide the cards then flip them when selected https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/ */
    const front = document.createElement("div");
    front.classList.add("front");
    const back = document.createElement("div");
    back.classList.add("back");
    back.style.backgroundImage = `url(${item.img})`;
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
});

/*game Timer https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript */
let timer = document.querySelector(".timer");
let interval;
function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute +"  "+ "Minutes"+"  "+ second +"  "+"Seconds";
        second++;
        if(second == 60){
            minute++;
            second = 0;
        }
    },1000);
}

/*move counter code https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript*/

let counter = document.querySelector('.moves');
function moveCounter(){    
    moves++;    
    counter.innerHTML = moves + "  Moves";
}



/* add an click event listener to the divs within the section without letting you select the parent element https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/ */

grid.addEventListener('click', function (event) {

    let clicked = event.target; /*any element that has been clicked 
    Start the timer on the first click*/
    if (timerOn === false) {
        startTimer();
        timerOn = true;
    }

    /*Stop function code below from https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript*/ 

    if (clicked.nodeName === 'SECTION' ||
        clicked === previousTarget ||
        clicked.parentNode.classList.contains('selected') ||
        clicked.parentNode.classList.contains('match')) {
        return;
    }

    /* creating the game functions, click matches and reset guess count https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/ and modified*/

    if (count < 2) {
        count++;
        /*code to make it only increase movecounter after 2 cards have been selected*/
        if (count === 2){
            moveCounter()
        }
        if (count === 1) {
            firstGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        } else {
            secondGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        }
        if (firstGuess !== "" && secondGuess !== "") {
            if (firstGuess === secondGuess) {
                matchCount++
                setTimeout(match, delay);
                setTimeout(resetGuesses, delay);
            } else {
                setTimeout(resetGuesses, delay);
            }
        }
        previousTarget = clicked;
    }
/*match all the cards, victory panel and reset game*/
    if (matchCount === 9) {
        gameVictory(moves, timer)
        clearInterval(interval)
        timerOn = false;
    }
})

/*match card function code below from https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/ and modified*/

const match = () => {
    let selected = document.querySelectorAll(".selected");
    selected.forEach((card) => {
        card.classList.add("match")
    })
}
/* function to reset guesses code taken from https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/ */

const resetGuesses = () => {
    firstGuess = "";
    secondGuess = "";
    count = 0;

    let selected = document.querySelectorAll(".selected");
    selected.forEach((card) => {
        card.classList.remove("selected");
    })
}

/*Restart game via the start button*/
function reloadGame(){
    window.location.reload();
} 

let restartGame = function restartGame() {
    reloadGame();
};

/* instruction modal https://www.w3schools.com/howto/howto_css_modals.asp*/ 

let modal = document.getElementById("instructions-modal");
let btn = document.getElementById("instruction-btn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
  }
  
  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  
  function gameVictory() {
    let victoryModal = document.getElementById("VictoryPanel-modal");
    victoryModal.style.display = "block";
    victoryModal.querySelector('.VictoryPanelMoves').innerHTML = 'You caught them all in ' + moves + ' moves!';
    victoryModal.querySelector('.VictoryPanelTime').innerHTML = 'it took you ' + minute + ' minutes and ' + second + ' seconds!' + `<br>` + 'GOODJOB!';
}
  