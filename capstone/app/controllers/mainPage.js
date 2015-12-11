app.controller("mainPage", ["$scope", "$firebaseArray", 
  function($scope, $firebaseArray){
    var ref = new Firebase("https://cheveux-pure.firebaseio.com/");

    // Logout user
    logout.click(function() {
      var ref = new Firebase("https://cheveux-pure.firebaseio.com/" + uid + "/");
        console.log("lisapertee", logout);
      ref.unauth();
      location.reload();
    });

}]);