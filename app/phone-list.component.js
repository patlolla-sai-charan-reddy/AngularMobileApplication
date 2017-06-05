angular.
	module('phonecatApp').
	component('phoneList', {
		template:
			'<ul>' +
				'<li ng-repeat="phone in $ctrl.phones">' +
					'<span>{{phone.name}}</span>' +
					'<p>{{phone.details}}</p>' +
				'</li>' +
			'</ul>',
		controller: function PhoneListController() {
			this.phones = [
				{
					name: 'Nexus S',
					details: 'Fast just got faster with Nexus S.'
				}, {
					name: 'Motorola XOOM™ with Wi-Fi',
					details: 'The Next, Next Generation tablet.'
				}, {
					name: 'MOTOROLA XOOM™',
					details: 'The Next, Next Generation tablet.'
				}
			];
		}
  });