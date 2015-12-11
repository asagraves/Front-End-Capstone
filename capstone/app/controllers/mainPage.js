app.controller("mainPage", ["$scope", "$firebaseArray", "logging",
  function($scope, $firebaseArray, logging){
    console.log("hey ", logging);
    var ref = new Firebase("https://cheveux-pure.firebaseio.com");
    // var logout = ("#logout");

     var ref = new Firebase("https://cheveux-pure.firebaseio.com");
      ref.authWithOAuthPopup("google", function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          logging.setUid(authData.uid);
          console.log(logging.getUid());
        }
      })



    // Logout user
    $scope.logout = function() {
      var ref = new Firebase("https://cheveux-pure.firebaseio.com/" + logging.getUid() + "/");
        console.log("lisapertee", logout);
      ref.unauth();
      location.reload();
    };









}]);


