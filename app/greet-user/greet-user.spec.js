describe('greetUser', function() {
	beforeEach(module("phonecatApp"));

	describe('GreetUserController', function() {
		it('should create a `phones` model with 3 phones',
			inject(function($componentController) {
				var ctrl = $componentController('greetUser');

				expect(ctrl.user).toBe("User");
			}));
	})
})