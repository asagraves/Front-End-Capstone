var app = angular.module("CheveuxPure", 
  ["firebase", "ngRoute"]);
  
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/userAuth.html',
        controller: 'authUser'
      })
      .when('/home', {
        templateUrl: 'partials/main.html',
        controller: 'mainPage'
      })
      // .when()
      .otherwise("/");
}]);