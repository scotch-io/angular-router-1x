angular.module('app.about', [])
	.controller('AboutController', AboutController);

function AboutController() {
	this.message = 'About Page!';
}