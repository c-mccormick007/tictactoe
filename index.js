const gameBoard = (() => {
    console.log("This is a gameboard module.");
    let x = 'x';
    let o = 'o';
    let gameboard = [x, x, o, o, o, x, x, o ,x];
    console.log(gameboard);

    return {gameboard}
})();

const displayController = ((doc) => {
    for (i=0; i < gameBoard.gameboard.length; i++){
        let temp = doc.createElement('div');
        temp.className = 'box';
        temp.innerHTML = gameBoard.gameboard[i];
        doc.querySelector('.main').appendChild(temp);
    }
})(document);