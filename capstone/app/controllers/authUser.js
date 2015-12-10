app.controller("authUser", ["$scope", "$firebaseArray", function($scope, $firebaseArray){

var ref = new Firebase("https://https://cheveux-pure.firebaseio.com/#.firebaseio.com");
ref.authWithOAuthPopup("facebook", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});