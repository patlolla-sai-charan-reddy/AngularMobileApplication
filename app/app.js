var phonecatApp = angular.module("phonecatApp", []);

phonecatApp.controller("PhoneListController", function PhoneListController($scope) {
  $scope.phones = [
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

});