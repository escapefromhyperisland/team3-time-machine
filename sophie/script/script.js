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
  return true;
};

const selectOption = (option) => {
  //btn.style.backgroundColor = "green";
  const nextTextNodeId = option.nextText;
  //////////////if-statement has to be changed as soon as I have more than 2 questions///////////////////////
  if (nextTextNodeId > 2) {
    return startGame();
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
        nextText: 2,
      },
      {
        text: "Checking my environment.",
        nextText: 2,
      },
      {
        text: "Scanning my body for injuries.",
        setState: { jstag: true },
        nextText: 2,
      },
      {
        text: "RUN. FOR. YOUR. LIFE!",
        nextText: 2,
      },
    ],
  },
  {
    id: 2,
    text: "Ok ok. I get it. You are scared. I would be too. Look around you: In which kind of age do you think you are?",
    options: [
      {
        text: "This looks like some motherf***ing sci-fi shit, män!",
        nextText: 3,
      },
      {
        text: "Hmmm, who would decorate the room with all this medieval bagpipes?",
        //soundeffects should come in when pressing that choice!
        setState: { display: true },
        nextText: 3,
      },
      {
        text: "Is this not the place I was getting unconscious?",
        nextText: 3,
      },
      {
        text: "No shit clue. But it better is an age with painkillers!!!!",
        nextText: 3,
      },
    ],
  },
];

startGame();
