angular.module('routerApp', [
	'app.home', 
	'app.about',
	'app.inception',
	'ngNewRouter'
])
	.controller('MainController', ['$router', MainController]);

function MainController($router) {
	$router.config([
		{ path: '/', component: 'home' },
		{ path: '/about', component: 'about' },
		{ path: '/inception', component: 'inception' }
	]);
}