//video https://www.youtube.com/watch?v=R1S_NhKkvGA
//minute

const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-buttons");

let state = {};

const startGame = () => {
  state = {};
  showTextNode(1);
};

const showTextNode = (textNodeIndex) => {
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach((option) => {
    if (showOption(option)) {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("btn");
      button.addEventListener("click", () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  });
};

const showOption = (option) => {
  return option.requiredState == null || option.requiredState(state);

  //return true;
};

const selectOption = (option) => {
  //btn.style.backgroundColor = "green";
  const nextTextNodeId = option.nextText;
  //////////////if-statement has to be changed as soon as I have more than 2 questions///////////////////////
  //   if (nextTextNodeId > 2) {
  //     return startGame();
  //   }
  if (nextTextNodeId == 9) {
    var s = document.getElementById("container").style;
    s.opacity = 1;
    (function fade() {
      (s.opacity -= 0.1) < 0 ? (s.display = "none") : setTimeout(fade, 290);
    })();
    setTimeout(function () {
      location.href = "maze.html";
    }, 4000);
    //loadScript("maze.js"); //CODE BELOW LOADsCRIPT WON'T BE LOADED
  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
};

const textNodes = [
  {
    id: 1,
    text: "You wake up. Your head hurts af. What's your first move?",
    options: [
      {
        text: "Going back to sleep.",
        nextText: 10,
      },
      {
        //if the user is choosing this option the room/world should appear
        text: "Checking my environment.",
        // requiredState: (currentState) => currentState.world,
        // setState: { world: true },
        //next would be the world showing up//maybe just leading to a new page?
        nextText: 9,
      },
      {
        text: "Scanning my body for injuries.",
        // setState: { jstag: true },
        nextText: 2,
      },
      {
        text: "RUN. FOR. MY. LIFE!",
        nextText: 10,
      },
    ],
  },
  {
    id: 2,
    text: "Ok ok. I get it. You are scared. I would be too. Look around you: In which kind of age do you think you are?",
    options: [
      {
        text: "This looks like some motherf***ing sci-fi shit, män!",
        nextText: 5,
      },
      {
        //if the user is choosing this option the room/world should appear
        text: "Hmmm, who would decorate the room with all these medieval bagpipes?",
        //soundeffects should come in when pressing that choice!
        // requiredState: (currentState) => currentState.world,
        // setState: { world: false },
        //next would be the world showing up//maybe just leading to a new page?
        nextText: 9,
      },
      {
        text: "Is this not the place I was getting unconscious?",
        nextText: 5,
      },
      {
        text: "No shit clue. But it better is an age with painkillers!!!!",
        nextText: 5,
      },
    ],
  },
  {
    id: 9,
    text: "Wait, did I hear noises?! Is there someone here?",
    //options: [],
  },
  {
    id: 10,
    text: "Ok bye",
    options: [
      {
        text: "Start Over!",
        nextText: 1,
      },
    ],
  },
  {
    id: 5,
    text: "You don't get it?!",
    options: [
      {
        text: "Try Again!",
        nextText: 1,
      },
    ],
  },
];

startGame();
