const gameBoard = (() => {

    let gameboard = [null, null, null, null, null, null, null, null , null];

    return {gameboard}

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
                currentTarget.innerHTML = choice;
                console.log(gameBoard.gameboard);
            }
        })
    }})
    


})(document);
