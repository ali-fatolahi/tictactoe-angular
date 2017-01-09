describe("row", function() {
	it("has the the right number of cells with correct player", function() {
		var nCells = 3;
		var aRow = new Row(nCells);
		expect(aRow.cells.length).toEqual(nCells);
		
		_.each(aRow.cells, function(cell) {
			expect(cell.player).toEqual(nobody);
		});
	})
})
