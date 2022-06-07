const container = document.querySelector(".container");
const imageContainer = document.querySelector(".image-container");
const enter = document.querySelector(".enter");

const firstChallengeInit = () => {
  container.innerHTML += `
      <img src='./assets/makimono01.png' alt="challenge 1 instruction"/>
        <div class="input">
        <input
          id="number-input-field"
          class="input-field"
          type="text"
          placeholder='type a number'
        />
        <button
          means="enter"
          id="enter-button"
          class='enter-button'
          type="submit"
          pys-onClick="on_click_number"
        >入力</button>
        <div class='numberIsBox' id="number-output"></div>
      </div>
    
        `;
};

function shuffleArray(array) {
  let curId = array.length;
  // There remain elements to shuffle
  while (0 !== curId) {
    // Pick a remaining element
    let randId = Math.floor(Math.random() * curId);
    curId -= 1;
    // Swap it with the current element.
    let tmp = array[curId];
    array[curId] = array[randId];
    array[randId] = tmp;
  }
  return array;
}

const kanjiNumbers = () => {
  let shuffledArray = shuffleArray(imgNumbers);

  for (let i = 0; i < imgNumbers.length; i++) {
    imageContainer.innerHTML += `
        <button
        class="numbers"
        onclick="pressedButton()"
        >
        <img
        id="${shuffledArray[i] + 1}"
        style="width: 150px; height: 150px"
        class="grid-img"
        src="./assets/0${shuffledArray[i]}.png"
        alt="${shuffledArray[i] + 1}"
        />
        </button>
        `;
  }

  for (let i = 1; i < 10; i++) {
    document.getElementById(`${i}`).addEventListener("click", pressedButton);
  }
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let imgNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let num1clicked = false;
let num2clicked = false;
let num3clicked = false;
let num4clicked = false;
let num5clicked = false;
let num6clicked = false;
let num7clicked = false;
let num8clicked = false;
let num9clicked = false;

const pressedButton = (event) => {
  // document
  //   .querySelectorAll(".numbers")
  //   .addEventListener("click", function handleClick(event) {
  if (event.target.id == "1" && num1clicked == false) {
    num1clicked = true;
  }
  if (event.target.id == "2" && num2clicked == false) {
    num2clicked = true;
  }
  if (event.target.id == "3" && num3clicked == false) {
    num3clicked = true;
  }
  if (event.target.id == "4" && num4clicked == false) {
    num4clicked = true;
  }
  if (event.target.id == "5" && num5clicked == false) {
    num5clicked = true;
  }
  if (event.target.id == "6" && num6clicked == false) {
    num6clicked = true;
  }
  if (event.target.id == "7" && num7clicked == false) {
    num7clicked = true;
  }
  if (event.target.id == "8" && num8clicked == false) {
    num8clicked = true;
  }
  if (event.target.id == "9" && num9clicked == false) {
    num9clicked = true;
  }
  if (event.target.classList.contains("active")) {
    if (event.target.id == "1" && num1clicked == true) {
      num1licked = false;
    }
    if (event.target.id == "2" && num2clicked == true) {
      num2clicked = false;
    }
    if (event.target.id == "3" && num3clicked == true) {
      num3clicked = false;
    }
    if (event.target.id == "4" && num4clicked == true) {
      num4clicked = false;
    }
    if (event.target.id == "5" && num5clicked == true) {
      num5clicked = false;
    }
    if (event.target.id == "6" && num6clicked == true) {
      num6clicked = false;
    }
    if (event.target.id == "7" && num7clicked == true) {
      num7clicked = false;
    }
    if (event.target.id == "8" && num8clicked == true) {
      num8clicked = false;
    }
    if (event.target.id == "9" && num9clicked == true) {
      num9clicked = false;
    }
    event.target.classList.remove("active");
  } else {
    event.target.classList.add("active");
  }
  // });
};

const num2 = document.getElementById("2");
const num7 = document.getElementById("7");
const num9 = document.getElementById("9");

const password = () => {
  console.log("nyuryoku pressed");
  if (
    num2clicked === true &&
    num7clicked === true &&
    num9clicked === true &&
    num1clicked === false &&
    num3clicked === false &&
    num4clicked === false &&
    num5clicked === false &&
    num6clicked === false &&
    num8clicked === false
  ) {
    window.location.href = "/Anna/pages/shinobi.html";
  }
};

firstChallengeInit();

kanjiNumbers();
