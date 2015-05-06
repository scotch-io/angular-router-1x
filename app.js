angular
	.module('app', [
		'app.home', 
		'app.about',
		'ui.router'
	])
	.config(RouteConfig)
	.controller('MainController', MainController);

/*
 * ROUTER CONFIG 
 */
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

/*
 * MAIN CONTROLLER
 */
function MainController() {

}