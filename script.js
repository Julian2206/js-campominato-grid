/* L'utente clicca su un bottone che genererà 
una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, 
la cella cliccata si colora di azzurro ed emetto 
un messaggio in console con il numero della cella cliccata. */

const grid = document.querySelector("#grid-container");

const button = document.getElementById("button");

//const width = 10;

// create 10*10 box by click
button.addEventListener("click", function () {
  for (let i = 0; i < 100; i++) {
    const newBox = createNewBox();
    grid.append(newBox);
  }
});

function createNewBox() {
  const box = document.createElement("div");
  box.classList.add("square");
  return box;
}
