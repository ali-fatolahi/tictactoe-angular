describe("Ref makes the right call", function() {	
	beforeEach(function() {
		rows = [];	
		for (var j = 0; j < 3; j++) {
			rows.push(new Row(3, j));
		}
		ref = new Referee(rows);
	});

	afterEach(function() {
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				rows[i].cells[j].setPlayer(nobody);
			}
		}
	});

	it("xPlayer wins row 0", function() {
		for (var i = 0; i < 3; i++) {
			rows[0].cells[i].setPlayer(xPlayer);
		}
		for (var i = 0; i < 2; i++) {
			rows[1].cells[i].setPlayer(oPlayer);
		}
		
		expect(ref.isWinner(xPlayer)).toBeTruthy();
		expect(ref.isWinner(oPlayer)).toBeFalsy();
	});
	
	it("oPlayer wins row 1", function() {
		for (var i = 0; i < 3; i++) {
			rows[1].cells[i].setPlayer(oPlayer);
		}
		for (var i = 0; i < 2; i++) {
			rows[0].cells[i].setPlayer(xPlayer);
		}
		
		expect(ref.isWinner(oPlayer)).toBeTruthy();
		expect(ref.isWinner(xPlayer)).toBeFalsy();
	});

	it("xPlayer wins row 2", function() {
		for (var i = 0; i < 3; i++) {
			rows[2].cells[i].setPlayer(xPlayer);
		}
		for (var i = 0; i < 2; i++) {
			rows[1].cells[i].setPlayer(oPlayer);
		}
		
		expect(ref.isWinner(xPlayer)).toBeTruthy();
		expect(ref.isWinner(oPlayer)).toBeFalsy();
	});

	it("xPlayer wins col 0", function() {
		for (var i = 0; i < 3; i++) {
			rows[i].cells[0].setPlayer(xPlayer);
		}
		for (var i = 0; i < 2; i++) {
			rows[i].cells[2].setPlayer(oPlayer);
		}
		
		expect(ref.isWinner(xPlayer)).toBeTruthy();
		expect(ref.isWinner(oPlayer)).toBeFalsy();
	});
	
	it("oPlayer wins col 1", function() {
		for (var i = 0; i < 3; i++) {
			rows[i].cells[1].setPlayer(oPlayer);
		}
		for (var i = 0; i < 2; i++) {
			rows[i].cells[2].setPlayer(xPlayer);
		}
		
		expect(ref.isWinner(oPlayer)).toBeTruthy();
		expect(ref.isWinner(xPlayer)).toBeFalsy();
	});

	it("xPlayer wins col 2", function() {
		for (var i = 0; i < 3; i++) {
			rows[i].cells[2].setPlayer(xPlayer);
		}
		for (var i = 0; i < 2; i++) {
			rows[i].cells[0].setPlayer(oPlayer);
		}
		
		expect(ref.isWinner(xPlayer)).toBeTruthy();
		expect(ref.isWinner(oPlayer)).toBeFalsy();
	});

	it("oPlayer wins col 2", function() {
		for (var i = 0; i < 3; i++) {
			rows[i].cells[2].setPlayer(oPlayer);
		}
		for (var i = 0; i < 2; i++) {
			rows[i].cells[0].setPlayer(xPlayer);
		}
		
		expect(ref.isWinner(oPlayer)).toBeTruthy();
		expect(ref.isWinner(xPlayer)).toBeFalsy();
	});
	
	it("oPlayer wins diagonally", function() {
		for (var i = 0; i < 3; i++) {
			rows[i].cells[i].setPlayer(oPlayer);
		}
		rows[0].cells[2].setPlayer(xPlayer);
		rows[2].cells[0].setPlayer(xPlayer);
	
		expect(ref.isWinner(oPlayer)).toBeTruthy();
		expect(ref.isWinner(xPlayer)).toBeFalsy();
	});
	
	it("xPlayer wins x-diagonally", function() {
		for (var i = 0; i < 3; i++) {
			rows[i].cells[i].setPlayer(xPlayer);
		}
		rows[0].cells[2].setPlayer(oPlayer);
		rows[2].cells[0].setPlayer(oPlayer);
	
		expect(ref.isWinner(xPlayer)).toBeTruthy();
		expect(ref.isWinner(oPlayer)).toBeFalsy();
	});
})
