var myApp = angular.module('runawayBride', []);
myApp.controller('BrideController', function($scope){
		$scope.x = 1000;
    $scope.y = 1000;
    $scope.runAway = function(){
      x = Math.random() * 400;
      y = Math.random() * 400;
      $('#target').css('left', x);
      $('#target').css('top', y);
    }
});
