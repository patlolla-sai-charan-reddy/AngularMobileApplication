angular.
	module('phoneList').
	component('phoneList', {
		templateUrl: 'phone-list/phone-list.template.html',
		controller: function PhoneListController() {
			this.phones = [
				{
					name: 'Nexus S',
					details: 'Fast just got faster with Nexus S.',
					age: 1
				}, {
					name: 'Motorola XOOM™ with Wi-Fi',
					details: 'The Next, Next Generation tablet.',
					age: 2
				}, {
					name: 'MOTOROLA XOOM™',
					details: 'The Next, Next Generation tablet.',
					age: 3
				}
			];

			this.orderProp = 'age';
		}
	});
