angular.module('routerApp', ['ngNewRouter', 'app.home', 'app.about'])
	.controller('MainController', ['$router', MainController]);

function MainController($router) {
	$router.config([

		// route for the home page component
		{ path: '/', component: 'home' },
		{ path: '/about', component: 'about' }

	]);
}