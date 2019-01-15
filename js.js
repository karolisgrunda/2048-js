

/*
0   1
0   2   1 = 0
0   3   1 = 0 ; 2 = 0

1   2   
1   3   2 = 0

2   3
*/
var board = [0, 0, 0, 0];

for (let i = 0; i <= board.length - 1 ; i++ ){ //for from 0 to 2
    if (board[i] > 0) {
        for (let j = i + 1; j <= board.length; j++) { // for from 1 to 3 m
            if (board[i] == board[j] && zeroesInGapChecker(i + 2)) {
                board[i] += board[i];
                board[j] = 0;
            }
        }
    }
}


function zeroesInGapChecker(index) {
    let status = true;
    for (let i = index - 1; i < board.length; i++) {
        if (board[i] != 0) {
            status = false;
        }
    }
    return status;
}