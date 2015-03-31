// this is neighborsService.js

angular.module('roadWarrior').factory('neighborsService', function(){
  return function(marker, legs) {
    var currentLeg = legs[0];
    var prevLeg;
    var nextLeg;
    var counter = 0;
    if (legs.length > 0) {
      while (!prevLeg || !nextLeg) {
	if(currentLeg.origin === marker) {
          nextLeg = currentLeg;
	} if (currentLeg.dest === marker) {
          prevLeg = currentLeg;
	} 
	counter++;
	if(counter > legs.length - 1) break;
	currentLeg = legs[counter];
      }
    }
    return {prevLeg: prevLeg, nextLeg: nextLeg};
  };
});
