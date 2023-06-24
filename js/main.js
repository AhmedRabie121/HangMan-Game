
let catigories = {
    People: ["Ahmed" , "Adam" , "Sama" , "Mostafa" , "Belal" , "mohamed" , "mahmoud" , "eman" , "fatma" , "rehab" , 
    "yasmeen" , "ganat" , "rahma" , "tasneem" , "gody", "mariam" , "baraa" , "yassen" , "jorry" , "bassem" , "ashrey" , "rabie" , "shaban" ],
    Moves : ["Up" , "pk" , "Harry Potter" , "John Wick" , "Forrest Gump" , "who i am" , "spider man" , "batman" , "the flash" , "avatar" , "extraction" , 
    "interstellar" , "top gun" , "The godfather" , "greed" , "pulp fiction" , "fight club" , "The matrix" , "star wars" , "star trek"],
    countries: ["Egypt" , "Syria" , "tounis" , "morocco" , "Sudan" , "Saudi Arabia" , "Tunisia" , "Somalia" , "Algeria" , "Iraq" , "Yemen" , "Libya" , "Jordan" , "Emirates" , "Lebanon" , "Mauritania" , "Kuwait" , "Oman" , "Qatar" , "Jubbuti" , "Bahrain" , "Palestine" ],
    Programming : ["PHP" , "Javascript" , "python" , "c" , "java" , "ruby"   , "html" , "c" , "sql" , "go" , "lisp" ]
}

let valueOfKey;
let arrWrod;

let catigoryWord = document.querySelector("header .info span")

catigoryWord.textContent = Object.keys(catigories)[Math.ceil(Math.random() * Object.keys(catigories).length-1)]

for(let i = 0 ; i<Object.keys(catigories).length; i++ ){

    if(catigoryWord.textContent === Object.keys(catigories)[i]) {

        let arrayOfKey = catigories[`${catigoryWord.textContent}`]

         valueOfKey = arrayOfKey[Math.ceil(Math.random() * arrayOfKey.length-1)]

        let wordPlace = document.querySelector(".word-place");
        
         arrWrod = valueOfKey.toUpperCase().split("")

        for(let j =0 ; j<valueOfKey.length; j++) {
            if(arrWrod[j] === " ") {
                let span = document.createElement("span")
                span.classList.add("space")
                wordPlace.appendChild(span)
                let spanWithSpace = document.createElement("span")
                spanWithSpace.className = "with-space"
                spanWithSpace.innerHTML = " "
                document.querySelector(".game-letters").appendChild(spanWithSpace)
            }else {
                let span = document.createElement("span")
                wordPlace.appendChild(span)
            }
        }
    }
}




let allLetters = document.querySelectorAll(".game-letters span");
let allWordPlace = document.querySelectorAll(".word-place span");
let gamePicDivs = document.querySelectorAll(".game-pic .draw div");
let gamePic = document.querySelector(".game-pic .draw");
let arrAnswer = []

let classesArray = ["stand" , "bole" , "flag-bole" , "rope" , "face" , "hands" , "legs"]
let counter = 0;


allLetters.forEach(letter => {
    if(letter.classList.contains("")) {
        letter.click()
        console.log("hi")
    }
    letter.addEventListener("click" , (e) => {
        let correct = false;
        e.currentTarget.classList.add("non-active");
        for(let i = 0; i<arrWrod.length; i++) {
            if(e.currentTarget.innerHTML === arrWrod[i]) {
                allWordPlace[i].innerHTML = `${e.currentTarget.innerHTML}`;
                arrAnswer.push(valueOfKey[i].innerHTML);
                correct = true;
            }
        }
        if(correct !== true) {
            let div = document.createElement("div")
            div.classList.add(`${classesArray[counter]}`);
            gamePic.appendChild(div);
            counter++
        }
        if(counter === 7) {
            popup("Try Again" , `Game Over The Answer Is : ${valueOfKey.toUpperCase()}`)
        }
        if(arrAnswer.length == valueOfKey.length) {
            popup("Play Again", `Congrats Your Answer Is Correct !`)
        }
    })
})

if(allLetters.length > 26) {
    document.querySelectorAll(".with-space").forEach(span => {
        span.click()
    });
}

function popup(btnText , popupText) {
  return  setTimeout(() => {
        let gameOver = document.createElement("div");

        gameOver.className = `popup`;

        gameOver.appendChild(document.createTextNode(popupText));

        let overlay = document.createElement("div");

        overlay.className = `overlay`;

        let playAgain = document.createElement("button");

        playAgain.appendChild(document.createTextNode(`${btnText}`))

        gameOver.appendChild(playAgain)

        document.body.appendChild(overlay)

        document.body.appendChild(gameOver)

        playAgain.addEventListener("click" , () => {
            window.location.reload();
        })
    },1000)
}

