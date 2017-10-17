(function(angular) {
  'use strict';
angular.module('FilterInControllerModule', []).
  controller('FilterController', ['filterFilter', function FilterController(filterFilter) {
    this.array = input;
    this.filteredArray = filterFilter(this.array, 'a');
  }]);
})(window.angular);
