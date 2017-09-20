// Greet Component
angular.
	module('greetUser').
	component('greetUser', {
    templateUrl: 'greet-user/greet-user.template.html',
    controller: function GreetUserController() {
      this.user = 'Welcome to Angular Mobile Application';
    }
  });