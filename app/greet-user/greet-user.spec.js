describe('greetUser', function() {
	beforeEach(module("greetUser"));

	describe('GreetUserController', function() {
		it('should create a `phones` model with 3 phones',
			inject(function($componentController) {
				var ctrl = $componentController('greetUser');

				expect(ctrl.user).toBe("Welcome to Mobile Application");
			}));
	})
})