app.controller("authUser", ["$scope", "$firebaseArray",  
  function($scope, $firebaseArray){

  var ref = new Firebase("https://cheveux-pure.firebaseio.com");
  ref.authWithOAuthPopup("google", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);

      var userList = $firebaseArray(ref.child("users"));

      userList.$loaded()
      .then(function(data){
        console.log("data,", data);

        for(var i = 0; i < data.length; i++){

          if(data[i].userUid === authData.uid){
            
            break

          } else {
            
          ref.child("users").child(authData.uid).set({
            "userUid" : authData.uid
          })

          }
        }
      });


    }
  });


}]);







// https://auth.firebase.com/v2/cheveux-pure.firebaseio.com/auth/google/callback