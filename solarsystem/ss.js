var SolarSystem = (function() {
  //connot be modified by anyone but me
  var planets = [Mercury, Venus, Earth, Mars, Jupiter];
  var dwarfplanets = [Eris, Pluto, Makemake, Ceres];
  
  //able to be modified
  SolarSystem. = function(planetAge) {
    if (planetAge <= max_planetAge()) {
      current_planetAge = planetAge;
    } else {
      throw "planetAge" + 1,000;
    }
  };

  SolarSystem.getAge = function() {
    return current_planetAge;
  };

  return SolarSystem;


  SolarSystem.dwarfplanets = function(){
    
  }

})(Sedan);

console.log(SolarSystem);
console.log(SolarSystem.current_planetAge(9));





// var Sedan = (function(sedan) {
//   var max_occupancy = 6;
//   var current_occupancy = 0;

//   sedan.setOccupancy = function(occupancy) {
//     if (occupancy <= max_occupancy) {
//       current_occupancy = occupancy;
//     } else {
//       throw "Cannot exceed maximum occupancy of " + max_occupancy;
//     }
//   };

//   sedan.getOccupancy = function() {
//     return current_occupancy;
//   };

//   return sedan;

// })(Sedan)

// console.log(Sedan);
// console.log(Sedan.setOccupancy(9));




