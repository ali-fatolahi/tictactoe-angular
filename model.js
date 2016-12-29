function Player(symbol) {
	this.symbol = symbol;
}

nobody = new Player(' ');
xPlayer = new Player('X');
oPlayer = new Player('O');

function Cell(player) {
	this.player = player;
}

function Row(nCells) {
	this.cells = [];
	for (var i = 0; i < nCells; i++) {
		this.cells.push(new Cell(nobody));
	}
}

function Status(size) {
	statusTable = ['Playing ... '];
	playing = true;
	squareSize = size * size;
	emptyCellCount = squareSize;
	
	this.updateStatus = function(newLine) {
		statusTable.push(newLine);
	}
	
	this.getStatusTable = function() {
		return statusTable;
	}
	
	this.setStatus = function(isPlaying) {
		playing = isPlaying;
	}
	
	this.getStatus = function() {
		return playing;
	}
	
	this.decrementEmptyCells = function() {
		emptyCellCount--;
	}
	
	this.isDisabled = function() {
		return emptyCellCount == 0 || !playing;
	}
	
	this.reset = function() {
		statusTable = ['Playing ... '];
		playing = true;
		emptyCellCount = squareSize;
	}
}

function Referee(rows) {
	function isWinnerRow(cells, player) {
		for (var i = 0; i < cells.length; i++) {
			if (cells[i].player != player) {
				return false;
			}
		}
		
		return true;
	}
	
	function isWinnerColumn(colIndex, player) {
		for (var i = 0; i < rows.length; i++) {
			if (rows[i].cells[colIndex].player != player) {
				return false;
			}
		}
		
		return true;
	}
	
	function isWinnerCrossDiagonal(player) {
		var size = rows.length;
		
		for (var i = 0; i < size; i++) {
				if (rows[i].cells[size - i - 1].player != player) {
					return false;
				}
		}
		
		return true;
	}
	
	function isWinnerDiagonal(player) {
		var size = rows.length;
		
		for (var i = 0; i < size; i++) {
				if (rows[i].cells[i].player != player) {
					return false;
				}
		}
		
		return true;
	}
	
	this.isWinner = function(player) {
		for (var i = 0; i < rows.length; i++) {
			if (isWinnerRow(rows[i].cells, player)) {
				return true;
			}
		}
		
		for (var i = 0; i < rows[0].cells.length; i++) {
			if (isWinnerColumn(i, player)) {
				return true;
			}
		}
		
		if (isWinnerDiagonal(player)) {
			return true;
		}
		
		if (isWinnerCrossDiagonal(player)) {
			return true;
		}
		
		return false;
	}

}