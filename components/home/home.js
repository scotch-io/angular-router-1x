angular.module('app.home', [])
	.controller('HomeController', HomeController);

function HomeController() {

	this.message = 'Hello!';
	
}

HomeController.prototype.canDeactivate = function() {
	return confirm('Is this what you really want?');
}