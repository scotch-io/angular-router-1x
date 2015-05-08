# Angular New Router in 1.x Apps

[Presentation Videp](https://www.youtube.com/watch?v=DGT3Htcqygk)

[Presentation Slides](http://slides.com/chrissevilleja/ng-vegas-router)

An experiment in using the new Angular 2.0 router in Angular 1.x applications. The new router is backwards compatible and provides lots of fun features.

## What's this Repo About?

Upgrading an application from UI-Router to Component Router. This helps get us ready for Angular 2.0

[Angular Component Router](https://github.com/angular/router)

*NOTE: The router is not finalized yet so this code may have to change as the router is updated.*

**Why use the new router in 1.x applications?** There are many planned features in the router that will help build out easier and more scalable Angular apps, whether it be 1.x or 2.x.

- Conventions and defaults
- Customizable at almost every point
- Nested routers (and nested encapsulated apps with their own routers)
- Dynamic route generation
- Lazy-loaded components

## Requirements

For this repository, we are creating a server with Node and serving the application.

- [node and npm](http://nodejs.org)

## Installation

1. Install dependencies: `npm install`
2. Start the server: `node server.js`
3. View application in browser: [http://localhost:8080](http://localhost:8080)

## Upgrading

### Add Component Router dependencies

```
<script src="libs/router.es5.js"></script>
```

### Inject Component Router into our App

```
app.module('app', [
		'app.home',
		'app.about',
		'ngComponentRouter'
	])
```

### Add Configuration

```
function MainController($router) {
	$router.config([
		{ path: '/', component: 'home' },
		{ path: '/about', component: 'about' }
	]);
}
```

### Tell Component Router where to find views

```
app.module('app', [...])
	.config(function($componentLoaderProvider) {
		$componentLoaderProvider(function(name) {
			return './views/' + name + '.html';
		});
	});
```
