

angular.module('phoneFilters', []).filter('checkmark', function () {
   return function(input) {
     return input ? '\u2713' : '\u2718';
   };
});
