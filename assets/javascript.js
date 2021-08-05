/* Code from https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/*/
//Declaring card data
const cardsArray = [{
        name: 'pokemon1',
        img: 'images/001.png',
    },
    {
        name: 'pokemon2',
        img: 'images/003.png',
    },
    {
        name: 'pokemon3',
        img: 'images/004.png',
    },
    {
        name: 'pokemon4',
        img: 'images/007.png',
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
let previousTarget = null

/* Duplicate array to create a match for each card and randomize the order of the displayed cards*/
let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());

const game = document.getElementById("game");

const grid = document.createElement("section");
grid.setAttribute("class", "grid");
game.appendChild(grid);

/* looping through the card arry to display the images by creating divs for each item, code taken from https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/ */

gameGrid.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = item.name;
    card.style.backgroundImage = `url(${item.img})`;
    grid.appendChild(card);
});

/* add an click event listener to the divs within the section without letting you select the parent element*/

grid.addEventListener("click", function (event) {
    let clicked = event.target;
    if (clicked.nodeName === "SECTION" ||
    clicked === previousTarget) {
        return
    }
    if (count < 2) {
        count++;
        if (count === 1) {
            firstGuess = clicked.dataset.name;
            clicked.classList.add("selected")
        } else {
            secondGuess = clicked.dataset.name
            clicked.classList.add("selected")
        }
        if (firstGuess !== "" && secondGuess !== "") {
            if (firstGuess === secondGuess) {
                match()
            }
        }
        previousTarget = clicked;
    }
})

//Count and select code below from https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/ and modified



const match = () => {
    let selected = document.querySelectorAll(".selected");
    selected.forEach((card) => {
        card.classList.add("match")
    })
}