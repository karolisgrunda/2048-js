
   export{ addNumbersToLeft };

   function addNumbersToLeft(board) {
        for (let i = 0; i <= gameBoardLength; i++) {
            for (let j = 0; j <= gameBoardLength - 1 ; j++ ){ //for from 0 to 2
                if (board[i][j] > 0) {
                    for (let z = j + 1; z <= gameBoardLength; z++) { // for from 1 to 3 m
                        if (board[i][j] == board[i][z] && zeroesInGapChecker(j, z)) {
                            board[i][j] += board[i][j];
                            board[i][z] = 0;
                        }
                    }
                }   
            }
            slider(i, 'left');
        }
    } 


    function zeroesInGapChecker(min, max) {
        let status = true;
        for (let i = min + 2; i < max; i++) {
            if (board[i] != 0) {
                status = false;
            }
        }
        return status;
    }