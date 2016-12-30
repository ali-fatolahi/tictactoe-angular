var app = angular.module('appTicTacToe', []);

app.controller('mainController', function($scope) {
	var status = new Status(3);
	$scope.statusTable = status.getStatusTable();

	$scope.players = [xPlayer, oPlayer];
	$scope.selectedPlayer = xPlayer;
	$scope.otherPlayer = oPlayer;

	$scope.rows = [];	
	for (var j = 0; j < 3; j++) {
		$scope.rows.push(new Row(3));
	}

	var ref = new Referee($scope.rows);
	
	function markRandomCell() {
		var emptyCells = [];

		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				if ($scope.rows[i].cells[j].player == nobody) {
					emptyCells.push( $scope.rows[i].cells[j] );
				}
			}
		}

		var max = emptyCells.length;
		var index = Math.floor(Math.random() * max);
		emptyCells[index].player = $scope.otherPlayer;
		status.decrementEmptyCells();
	}

	function reset() {
		$scope.playing = true;

		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				$scope.rows[i].cells[j].player = nobody;
			}
		}
		
		status.reset();
	}

	$scope.markCell = function(cell) {
		if (status.isDisabled()) {
			reset();
		} else {
			if (cell.player == nobody) {
				cell.player = $scope.selectedPlayer;
				status.decrementEmptyCells();
				if (ref.isWinner($scope.selectedPlayer)) {
					status.updateStatus('You win!');
					status.setStatus(false);
				} else {
					markRandomCell();
					if (ref.isWinner($scope.otherPlayer)) {
						status.updateStatus('You lose');
						status.setStatus(false);
					}
				}
			}
		}
	}

	$scope.switchPlayer = function() {
		if ($scope.selectedPlayer == xPlayer) {
			$scope.otherPlayer = oPlayer;
		} else {
			$scope.otherPlayer = xPlayer;
		}

		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				if ($scope.rows[i].cells[j].player == xPlayer) {
					$scope.rows[i].cells[j].player = oPlayer;
				} else if ($scope.rows[i].cells[j].player == oPlayer) {
					$scope.rows[i].cells[j].player = xPlayer;
				}
			}
		}
	}
});