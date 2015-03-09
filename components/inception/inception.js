angular.module('app.inception', [])
	.controller('InceptionController', ['$router', InceptionController]);

function InceptionController($router) {
	this.router = $router;

	$router.config([
		{ path: '/inception', component: 'inception' }
	]);

}