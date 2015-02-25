# Angular New Router in 1.x Apps

An experiment in using the new Angular 2.0 router in Angular 1.x applications. The new router is backwards compatible and provides lots of fun new features.

[Angular New Router](https://github.com/angular/router)

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

## Features

- 3 different routes
- route with parameter
- `href`s generated with `router-link()`
- Components help mimic Angular 2.0 applications