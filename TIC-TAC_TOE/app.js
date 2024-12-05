
let buttons = document.querySelectorAll(".btn");
let message = document.querySelector("#msg");
let newbtn = document.querySelector("#Newgame")
let resetbtn = document.querySelector("#reset")
let turnO = true;

const win_pattern = [
   [0, 1, 2],
   [0, 3, 6],
   [0, 4, 8],
   [1, 4, 7],
   [2, 5, 8],
   [2, 4, 6],
   [3, 4, 5],
   [6, 7, 8]
]
resetbtn.addEventListener("click", reset)

showwinner = (winner) => {
   message.innerHTML = 'Winner is ' + winner
   message.classList.remove("hide")
   newbtn.classList.remove("hide")
   resetbtn.classList.add("hide")
}
newbtn.addEventListener("click", reset)
function enable() {
   buttons.forEach((btn) => {
      btn.disabled = false;
      btn.innerHTML = "";
   });
}
function reset() {
   turnO = true;
   enable();
   message.classList.add("hide")
   newbtn.classList.add("hide")
   resetbtn.classList.remove("hide")
}

function disable() {
   buttons.forEach((btn) => {
      btn.disabled = true;
   });
}
function showtie() {
   message.innerHTML = "Tie"
   message.classList.remove("hide")
   newbtn.classList.remove("hide")
   resetbtn.classList.add("hide")
}
function checkwinner() {
   let winner = false;
   win_pattern.forEach(pattern => {
      let pos1 = buttons[pattern[0]].innerHTML;
      let pos2 = buttons[pattern[1]].innerHTML;
      let pos3 = buttons[pattern[2]].innerHTML;
      if (pos1 != "" && pos2 != "" && pos3 != "") {
         if (pos1 == pos2 && pos2 == pos3) {
            disable();
            showwinner(pos1)
            winner = true;
         }

      }
   });
   if (winner == false) {
      tie = true;
      buttons.forEach((btn) => {
         if (btn.innerHTML === "") {
            tie = false;
         }
      });
      if (tie) {
         showtie();
            }
   }
  
}


buttons.forEach((btn) => {
   btn.addEventListener("click", () => {
      if (turnO) {
         btn.innerHTML = "O";
         turnO = false;
      }
      else {
         btn.innerHTML = "X";
         turnO = true;
      }
      btn.disabled = true;
      checkwinner();

   })
});
