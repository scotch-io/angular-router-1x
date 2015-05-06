angular
	.module('app', [
		'app.home', 
		'app.about',
		'ui.router',
		'ngComponentRouter'
	])
	.config(RouteConfig)
	// .config(LoaderConfig)
	.controller('MainController', MainController);

function RouteConfig($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
	  .state('home', {
	      url: '/',
	      templateUrl: 'views/home.html',
	      controller: 'HomeController',
	      controllerAs: 'home'
	  })
	  
	  // nested list with custom controller
	  .state('about', {
	      url: '/about',
	      templateUrl: 'views/about.html',
	      controller: 'AboutController',
	      controllerAs: 'about'
	  });
}

function LoaderConfig($componentLoaderProvider) {
	$componentLoaderProvider.setTemplateMapping(function(name) {
    return './app/views/' + name + '.html';
	});
}

function MainController() {

	// $router.config([
	// 	{ path: '/', component: 'home' },
	// 	{ path: '/about', component: 'about' },
	// 	{ path: '/inception', component: 'inception' }
	// ]);

}