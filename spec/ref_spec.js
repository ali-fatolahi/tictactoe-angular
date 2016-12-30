describe("Ref makes the right call", function() {	
	beforeEach(function() {
		rows = [];	
		for (var j = 0; j < 3; j++) {
			rows.push(new Row(3));
		}
		ref = new Referee(rows);
	});

	afterEach(function() {
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				rows[i].cells[j].player = nobody;
			}
		}
	});

	it("xPlayer wins row 0", function() {
		for (var i = 0; i < 3; i++) {
			rows[0].cells[i].player = xPlayer;
		}
		for (var i = 0; i < 2; i++) {
			rows[1].cells[i].player = oPlayer;
		}
		
		expect(ref.isWinner(xPlayer)).toBeTruthy();
		expect(ref.isWinner(oPlayer)).toBeFalsy();
	});
	
	it("oPlayer wins row 1", function() {
		for (var i = 0; i < 3; i++) {
			rows[1].cells[i].player = oPlayer;
		}
		for (var i = 0; i < 2; i++) {
			rows[0].cells[i].player = xPlayer;
		}
		
		expect(ref.isWinner(oPlayer)).toBeTruthy();
		expect(ref.isWinner(xPlayer)).toBeFalsy();
	});

	it("xPlayer wins row 2", function() {
		for (var i = 0; i < 3; i++) {
			rows[2].cells[i].player = xPlayer;
		}
		for (var i = 0; i < 2; i++) {
			rows[1].cells[i].player = oPlayer;
		}
		
		expect(ref.isWinner(xPlayer)).toBeTruthy();
		expect(ref.isWinner(oPlayer)).toBeFalsy();
	});

	it("xPlayer wins col 0", function() {
		for (var i = 0; i < 3; i++) {
			rows[i].cells[0].player = xPlayer;
		}
		for (var i = 0; i < 2; i++) {
			rows[i].cells[2].player = oPlayer;
		}
		
		expect(ref.isWinner(xPlayer)).toBeTruthy();
		expect(ref.isWinner(oPlayer)).toBeFalsy();
	});
	
	it("oPlayer wins col 1", function() {
		for (var i = 0; i < 3; i++) {
			rows[i].cells[1].player = oPlayer;
		}
		for (var i = 0; i < 2; i++) {
			rows[i].cells[2].player = xPlayer;
		}
		
		expect(ref.isWinner(oPlayer)).toBeTruthy();
		expect(ref.isWinner(xPlayer)).toBeFalsy();
	});

	it("xPlayer wins col 2", function() {
		for (var i = 0; i < 3; i++) {
			rows[i].cells[2].player = xPlayer;
		}
		for (var i = 0; i < 2; i++) {
			rows[i].cells[0].player = oPlayer;
		}
		
		expect(ref.isWinner(xPlayer)).toBeTruthy();
		expect(ref.isWinner(oPlayer)).toBeFalsy();
	});
	
	it("oPlayer wins diagonally", function() {
		for (var i = 0; i < 3; i++) {
			rows[i].cells[i].player = oPlayer;
		}
		rows[0].cells[2].player = xPlayer;
		rows[2].cells[0].player = xPlayer;
	
		expect(ref.isWinner(oPlayer)).toBeTruthy();
		expect(ref.isWinner(xPlayer)).toBeFalsy();
	});
	
	it("xPlayer wins x-diagonally", function() {
		for (var i = 0; i < 3; i++) {
			rows[i].cells[i].player = xPlayer;
		}
		rows[0].cells[2].player = oPlayer;
		rows[2].cells[0].player = oPlayer;
	
		expect(ref.isWinner(xPlayer)).toBeTruthy();
		expect(ref.isWinner(oPlayer)).toBeFalsy();
	});
})