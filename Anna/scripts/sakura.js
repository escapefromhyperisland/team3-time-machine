const thirdChallenge = document.querySelector(".third-challenge");
const choBtn = document.querySelector("#cho");
const hanBtn = document.querySelector("#han");

const thirdChallengeInit = () => {
  thirdChallenge.innerHTML += `
        <img src="../assets/makimono03.png" alt="challenge 3 instruction"/>

        <div class='tobaku'>
            <p>よろしゅうござんすか？　入ります。</p>
            <p>さぁ、張った張った！！</p>
            <p>Click 丁 or 半</p>
        </div>

        <div class="cho-han-btns-container">
            <button class='chohanBtns' id="cho">丁</button>
            <button class='chohanBtns' id="han">半</button>
        </div>
    `;

  choBtn.addEventListener(
    "click",
    (e) => {
      btn.classList.toggle("pushed");
    },
    true
  );
  hanBtn.addEventListener(
    "click",
    (e) => {
      btn.classList.toggle("pushed");
    },
    true
  );
};

thirdChallengeInit();
