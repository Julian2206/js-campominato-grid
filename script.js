/* L'utente clicca su un bottone che genererĂ  
una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, 
la cella cliccata si colora di azzurro ed emetto 
un messaggio in console con il numero della cella cliccata. */

const grid = document.querySelector("#grid-container");

const button = document.getElementById("button");

const width = 100;
//const width = 10;

// create 10*10 box by click
button.addEventListener("click", function () {
  for (let i = 0; i < width; i++) {
    const newBox = createNewBox();

    newBox.addEventListener("click", function () {
      newBox.classList.toggle("color");
      //newBox.classList.add/remove("color") with "toggle";
      console.log(i + 1);
    });
    // insert the element on innerHTML of newBox (i + 1);
    newBox.innerHTML = i + 1;
    grid.append(newBox);
  }
});

function createNewBox() {
  const box = document.createElement("div");
  box.classList.add("square");
  return box;
}

//----------------------------------------------------------

const medium = document.getElementById("medium");

medium.addEventListener("click", function () {
  for (let i = 0; i < 80; i++) {
    const newBox = createNewBox();

    newBox.addEventListener("click", function () {
      newBox.classList.toggle("color");
      console.log(i + 1);
    });
    newBox.innerHTML = i + 1;
    grid.append(newBox);
  }
});

const hard = document.getElementById("hard");

hard.addEventListener("click", function () {
  for (let i = 0; i < 60; i++) {
    const newBox = createNewBox();

    newBox.addEventListener("click", function () {
      newBox.classList.toggle("color");
      console.log(i + 1);
    });
    newBox.innerHTML = i + 1;
    grid.append(newBox);
  }
});
