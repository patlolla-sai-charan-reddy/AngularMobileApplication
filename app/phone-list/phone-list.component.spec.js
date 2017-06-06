describe('phoneList', function() {
	beforeEach(module("phoneList"));

	describe('PhoneListController', function() {
		it('should create a `phones` model with 3 phones',
			inject(function($componentController) {
				var ctrl = $componentController('phoneList');

				expect(ctrl.phones.length).toBe(3);
			}));
	})
})

describe('phoneList', function() {
	beforeEach(module('phoneList'));

	describe('PhoneListController', function() {
		var ctrl;

		beforeEach(inject(function($componentController) {
			ctrl = $componentController('phoneList');
		}));

		it('should create `phones` model with 3 phones', function() {
			expect(ctrl.phones.length).toBe(3);
		});

		it('should set a default value for `orderProp` model', function() {
			expect(ctrl.orderProp).toBe('age');
		});
	});
});