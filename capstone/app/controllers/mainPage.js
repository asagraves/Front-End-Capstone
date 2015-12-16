app.controller("mainPage",
    function(){
$(document).ready(function(){       
  var scroll_start = 0;
  var startchange = $('#startchange');
  var offset = startchange.offset();
      if (startchange.length){
  $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
            $(".navbar-default").css('background-color', '#ffffff');
         } else {
            $('.navbar-default').css('background-color', 'transparent');
         }
     });
      }
  });
});













// app.controller("mainPage", ["$scope", "$firebaseArray", "logging",
//   function($scope, $firebaseArray, logging){
//     console.log("hey", logging);
//     var ref = new Firebase("https://cheveux-pure.firebaseio.com");
//     // var logout = ("#logout");

//       //log user in
//      var ref = new Firebase("https://cheveux-pure.firebaseio.com");
//       ref.authWithOAuthPopup("google", function(error, authData) {
//         if (error) {
//           console.log("Login Failed!", error);
//         } else {
//           console.log("Authenticated successfully with payload:", authData);
//           logging.setUid(authData.uid);
//           console.log(logging.getUid());
//         }
//       })

//       // var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");
//       //   ref.authWithOAuthPopup("google", function(error, authData) { /* Your Code */ }, {
//       //     remember: "sessionOnly",
//       //     scope: "email"
//       //   });





    



//     // Logout user
//     $scope.logout = function() {
//       var ref = new Firebase("https://cheveux-pure.firebaseio.com/" + logging.getUid() + "/");
//         console.log("lisapertee", logout);
//       ref.unauth();
//       location.reload();
//     };









// }]);


