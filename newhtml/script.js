let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".reset-button"); 
let msgCont = document.querySelector(".message");
let msg = document.querySelector(".winner-message");

let turnO = false;

const winPat = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.style.pointerEvents = 'none'; // Prevent further clicks

        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerHTML = `winner is ${winner}`;

} 

const checkWinner = () => {
    for (let pattern of winPat) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log(`Winner is ${pos1val}`);
                showWinner(pos2val);
                boxes.forEach(box => box.style.pointerEvents = 'none'); // Disable all boxes after winning
                break;
            }
        }
    }
}

// Reset button functionality
resetButton.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.style.pointerEvents = 'auto'; // Re-enable clicks
    });
    turnO = true; 

    msg.innerHTML = "";

});
