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
        text: "Checking my environment.",
        // requiredState: (currentState) => currentState.world,
        // setState: { world: true },
        nextText: 2,
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
    text: "Look around you: In which kind of age do you think you are?",
    options: [
      {
        text: "This looks like some motherf***ing sci-fi shit, män!",
        nextText: 5,
      },
      {
        text: "Is this not the place I was getting unconscious?",
        nextText: 5,
      },
      {
        text: "Hm, all those medieval bagpipes make me suspicious!",
        // requiredState: (currentState) => currentState.world,
        // setState: { world: false },
        nextText: 3,
      },
      {
        text: "No shit clue. But it better is an age with painkillers!!!!",
        nextText: 10,
      },
    ],
  },
  {
    id: 3,
    text: "Good good. When were the first real bagpipes invented (like we know them today)?",
    options: [
      {
        text: "1575",
        nextText: 5,
      },
      {
        text: "13th century",
        nextText: 6,
      },
    ],
  },
  {
    id: 6,
    text: "Uh lala. 'Nothing better than the sound of a bagpipe' - who said it?",
    options: [
      {
        text: "My friend who plays in a bagpipe band",
        nextText: 5,
      },
      {
        text: "The one & only Friedrich Nietzsche",
        nextText: 7,
      },
    ],
  },
  {
    id: 7,
    text: "Were bagpipes used as a weapon of war back in the good old days?",
    options: [
      {
        text: "Yes",
        nextText: 4,
      },
      {
        text: "No",
        nextText: 5,
      },
    ],
  },
  {
    id: 4,
    text: "We are getting closer! Who said the following quote: 'I understand the inventor of the bagpipes was inspired when he saw a man carrying an indignant, asthmatic pig under his arm. Unfortunetaly, the man-made sound never equalled the purity of the sound achieved by the pig.'",
    options: [
      {
        text: "Alfred Hitchcock",
        nextText: 9,
      },
      {
        text: "William Wallace from Braveheart",
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
    text: "Ok bye!",
    options: [
      {
        text: "Start Over!",
        nextText: 1,
      },
    ],
  },
  {
    id: 5,
    text: "Bzz, that was just wrong!",
    options: [
      {
        text: "Try Again!",
        nextText: 1,
      },
    ],
  },
];

startGame();
