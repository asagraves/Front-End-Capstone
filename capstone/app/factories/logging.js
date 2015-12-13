app.factory("logging", ["$q", "$http",
  function($q, $http) {
    
    //private variables
      var userUid;
       var ref = new Firebase("https://CheveuxPure.firebaseio.com");

      return {
          getUid : function(){
              return userUid;
          },

          setUid : function(value){
              userUid = value;
          },

          logOutUser : function(){
              ref.unauth(); 
      }
        };
      }]);