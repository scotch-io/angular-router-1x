angular.module('app.inception', [])
	.controller('InceptionController', ['$router', '$location', 'LEVELS', InceptionController]);

function InceptionController($router, $location, LEVELS) {
	this.router = $router;

	console.log(LEVELS);

	$router.config([
		{ path: '/',         redirectTo: '/home' },
		{ path: '/home', component: 'home' },
		{ path: '/inception', component: 'inception' }
	]);

	this.goDeeper = function() {
		var url = '/inception';

		for (i = 0; i < LEVELS; i++)
			url += '/inception';

		console.log(url);
		$location.path(url);

		LEVELS++;
	}

}