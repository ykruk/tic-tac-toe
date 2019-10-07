class TicTacToe {
    constructor() {
        this.field = {};
		this.field[0] = {};
		this.field[0][0] = null;
		this.field[0][1] = null;
		this.field[0][2] = null;
		this.field[1] = {};
		this.field[1][0] = null;
		this.field[1][1] = null;
		this.field[1][2] = null;
		this.field[2] = {};
		this.field[2][0] = null;
		this.field[2][1] = null;
		this.field[2][2] = null;
		
		this.finished = false;
		this.winner = null;
		this.draw = false;
		this.noturns = false;
		this.currentPlayerSymbol = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.field[rowIndex][columnIndex] === null) {
			this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
			this.currentPlayerSymbol = (this.currentPlayerSymbol === 'x') ? 'o' : 'x';
        }
        this.isFinished();
        this.getWinner();
        this.noMoreTurns();
        this.isDraw();
        this.getFieldValue(2, 1);
        this.getCurrentPlayerSymbol();
    }

    isFinished() {
        if (this.getWinner() || this.isDraw()) this.finished = true;
        return this.finished;
    }

    getWinner() {
        if (this.field[0][0] === this.field[0][1] && this.field[0][0] === this.field[0][2] && this.field[0][0]) this.winner = this.field[0][0];
		if (this.field[1][0] === this.field[1][1] && this.field[1][0] === this.field[1][2] && this.field[1][0]) this.winner = this.field[1][0];
		if (this.field[2][0] === this.field[2][1] && this.field[2][0] === this.field[2][2] && this.field[2][0]) this.winner = this.field[2][0];
		if (this.field[0][0] === this.field[1][0] && this.field[0][0] === this.field[2][0] && this.field[0][0]) this.winner = this.field[0][0];
		if (this.field[0][1] === this.field[1][1] && this.field[0][1] === this.field[2][1] && this.field[0][1]) this.winner = this.field[0][1];
		if (this.field[0][2] === this.field[1][2] && this.field[0][2] === this.field[2][2] && this.field[0][2]) this.winner = this.field[0][2];
		if (this.field[0][0] === this.field[1][1] && this.field[0][0] === this.field[2][2] && this.field[0][0]) this.winner = this.field[0][0];
		if (this.field[0][2] === this.field[1][1] && this.field[0][2] === this.field[2][0] && this.field[0][2]) this.winner = this.field[0][2];
	
		return this.winner;
    }

    noMoreTurns() {
        if(this.field[0][0] != null
		&& this.field[0][1] != null
		&& this.field[0][2] != null
		&& this.field[1][0] != null
		&& this.field[1][1] != null
		&& this.field[1][2] != null
		&& this.field[2][0] != null
		&& this.field[2][1] != null
		&& this.field[2][2] != null) this.noturns = true;
		return this.noturns;
    }

    isDraw() {
        if(this.noturns === true && this.getWinner() === null) this.draw = true;
		return this.draw;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
