angular
  .module('app.about', [])
	.controller('AboutController', AboutController);

function AboutController() {
	this.bestThings = [
    'Color!',
    'Comic Sans!',
    'Stars!'
  ];
}