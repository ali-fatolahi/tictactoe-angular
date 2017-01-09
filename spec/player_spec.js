describe("Player Symbol", function() {
	it("xPlayer has X as Symbol", function() {
		expect(xPlayer.symbol).toEqual("X");
	});

	it("oPlayer has O as Symbol", function() {
		expect(oPlayer.symbol).toEqual("O");
	});

	it("nobody has \' \' as Symbol", function() {
		expect(nobody.symbol).toEqual(" ");
	});
});
