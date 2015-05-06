angular
  .module('app.home', [])
	.controller('HomeController', HomeController);

function HomeController() {

	this.message = 'Hello!';

}