describe("cell", function() {
	it("has the the right player", function() {
		var aCell = new Cell(xPlayer);
		expect(aCell.player).toEqual(xPlayer);
	})
})