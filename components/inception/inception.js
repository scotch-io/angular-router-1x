angular.module('app.inception', [])
	.controller('InceptionController', ['$router', InceptionController]);

function InceptionController($router) {
	this.router = $router;

	$router.config([
		{ path: '/',         redirectTo: '/home' },
		{ path: '/home', component: 'home' },
		{ path: '/inception', component: 'inception' }
	]);

}