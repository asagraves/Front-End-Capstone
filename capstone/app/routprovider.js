var app = angular.module("CheveuxPure", ["firebase", "ngRoute", "angular.filter"]);
  
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'userAuth.html',
        controller: 'authUser'
      })
      // .when('/:userId', {
      //   templateUrl: 'partials/user-boards.html',
      //   controller: 'UserBoardsCtrl'
      // })
      // .when()
      .otherwise("/");
}]);