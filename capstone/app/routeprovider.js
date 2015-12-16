var app = angular.module("CheveuxPure", 
  ["firebase", "ngRoute"]);
  
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'mainPage'
      })
      // .when('/home', {
      //   templateUrl: 'partials/main.html',
      //   controller: 'mainPage'
      // })
      // .when()
      .otherwise("/");
}]);