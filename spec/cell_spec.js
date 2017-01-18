describe("cell", function() {
	it("has the right player, row, and col", function() {
		var aCell = new Cell(xPlayer, 1, 2);
		expect(aCell.getPlayer()).toEqual(xPlayer);
		expect(aCell.getRow()).toEqual(1);
		expect(aCell.getCol()).toEqual(2);
	})
	
	it("has a different player each time", function() {
		var aCell1 = new Cell(xPlayer, 1, 2);
		var aCell2 = new Cell(xPlayer, 1, 2);
		aCell2.setPlayer(oPlayer);
		expect(aCell1.getPlayer()).toEqual(xPlayer);
		expect(aCell2.getPlayer()).toEqual(oPlayer);
	})
})
