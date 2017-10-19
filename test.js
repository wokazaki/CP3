var myApp = angular.module('runawayBride', []);
myApp.controller('BrideController', function($scope){
		$scope.x = 1000;
    $scope.y = 1000;

    $scope.runAway = function(){
      var x = Math.random() * 400;
      var y = Math.random() * 400;
      console.log(x);
      console.log(y);
      console.log("Poop");
      $('#target').css('left', x);
      $('#target').css('top', y);

    };

});
