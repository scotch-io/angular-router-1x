angular
  .module('app.about', [])
	.controller('AboutController', AboutController);

function AboutController() {
	this.thingsFromThe80s = [
    'Goonies',
    'The Terminator',
    'Garfield',
    'HERE\'S JOHNNYYYYY'
  ];
}