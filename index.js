const gameBoard = (() => {

    let gameboard = [null, null, null, null, null, null, null, null , null];
    let winningCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];

    return {gameboard, winningCombos}

})();

const displayController = ((doc) => {


    const Player = (symbol) => {
        const getSymbol = () => symbol;

        return { getSymbol }
    }

    const X = Player('X');
    const O = Player('O');

    let turn = 0;

    const gameController = () => {


        if (turn % 2 === 0) {
            turn++;
            return X.getSymbol();
        }else{
            turn++;
            return O.getSymbol();
        }
    };

    for (i=0; i < gameBoard.gameboard.length; i++){
        let temp = doc.createElement('button');
        temp.className = 'box';
        temp.innerHTML = gameBoard.gameboard[i];
        doc.querySelector('.main').appendChild(temp);
    }

    boxes = doc.querySelectorAll('.box');
    boxes.forEach((box) => {{
        box.addEventListener('click', (e) => {
            const currentTarget = e.target;
            if  (currentTarget.innerHTML == "X" || currentTarget.innerHTML == "O"){
                alert("Select an open space!");
            }else {
                let choice = gameController();
                gameBoard.gameboard[Array.from(boxes).indexOf(currentTarget)] = choice;
                checkWinner(gameBoard.winningCombos);
                currentTarget.innerHTML = choice;
                console.log(gameBoard.gameboard);
                if (turn == 9){
                    let tie = doc.querySelector('.winner');
                    tie.innerHTML = `Its a tie.`;
                    endDisplay.style.display = "flex";
                }
            }
        })
    }})

    let endDisplay = doc.querySelector('.endOverlay');

    let checkWinner = (winners) => {
        let roundWon = false;
        let won = null;
        for (let i = 0; i <= 7; i++){
            const winCondition = winners[i];
            let a = gameBoard.gameboard[winCondition[0]];
            let b = gameBoard.gameboard[winCondition[1]];
            let c = gameBoard.gameboard[winCondition[2]];
            if (a === null || b === null || c === null){
                continue
            }
            if (a === b && b === c) {
                roundWon = true;
                won = a;
                break;
            }
        }

        if (roundWon == true){
            let winner = doc.querySelector('.winner');
            winner.innerHTML = `${won} Wins!`;
            endDisplay.style.display = "flex";
        }
    }

    
    let resetGame = () => {
        console.log("CLEAR");
        gameBoard.gameboard = [null, null, null, null, null, null, null, null , null];
        endDisplay.style.display = "none";
        turn = 0;
        boxes.forEach((box) => {
            box.innerHTML = "";           
        })
    }

    document.getElementById("yesbtn").addEventListener('click',()=>{
        resetGame();
    });

})(document);
