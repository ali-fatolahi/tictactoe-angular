describe("row", function() {
	it("has the the right number of cells with correct player", function() {
		var nCells = 3;
		var rowIndex = 2;
		var aRow = new Row(nCells, rowIndex);
		expect(aRow.cells.length).toEqual(nCells);
		
		_.each(aRow.cells, function(cell) {
			expect(cell.getPlayer()).toEqual(nobody);
		});
	})
})
