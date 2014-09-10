var mainDetailControllers = angular.module('mainDetailControllers', []);
  
mainDetailControllers.controller('PhoneListCtrl', ['$scope', '$http',
   function PhoneListCtrl($scope, $http) {
     $http.get('phones/phonespic.json').success(function(data) {
       $scope.phones = data;
     });
  
     $scope.orderProp = 'age';
   }]);
  
mainDetailControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
   function PhoneDetailCtrl($scope, $routeParams) {
     $scope.phoneId = $routeParams.phoneId;
   }]);