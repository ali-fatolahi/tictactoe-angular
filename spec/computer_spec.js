describe("computer", function() {
	it("Smartutor has the smart mode", function() {
		expect(smartutor.getMode()).toEqual('Smart');
	})
	
	it("Dumbutor has the dumb mode", function() {
		expect(dumbutor.getMode()).toEqual('Dumb');
	})
})
