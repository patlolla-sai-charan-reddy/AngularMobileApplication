// Phone List Component and add the tab list
angular.
	module('phoneList').
	component('phoneList', {
		templateUrl: 'phone-list/phone-list.template.html',
		controller: ['Phone',
			function PhoneListController(Phone) {
				this.orderProp = 'age';
				this.phones = Phone.query();
			}
		]
	});
