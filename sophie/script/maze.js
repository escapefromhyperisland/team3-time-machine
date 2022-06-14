//svg mazes
const levelTwo = document.querySelector(".level-two");
// const screamSound = document.querySelector(".scream-sound");

const collisionCheck = (value) => {
  if (value === "maze-border") {
    alert("You lost...try again.");
  }
  if (value === "end-game") {
    // alert("this is working");
    window.parent.postMessage("nextLevel");
  }
};

window.addEventListener("mousemove", (e) => {
  let check = e.target.classList.value;
  //console.log(e.target.classList.value);
  collisionCheck(check);
});
