require.config ({
   baseUrl: "./javascripts/sandwich-maker-asagraves",
   paths:{
       "jquery": "../../lib/bower_components/jquery/dist/jquery.min"
   }
});

require(
	["app"], function(buildingSandwich) {
   // var breadSelector = bread.buildingSandwich("Wheat");

   // console.log("breadSelector", breadSelector);

});

