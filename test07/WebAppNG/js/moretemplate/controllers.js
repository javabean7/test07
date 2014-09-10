var moreControllers = angular.module('moreControllers', []);
  
moreControllers.controller('PhoneListCtrl', ['$scope', '$http',
   function PhoneListCtrl($scope, $http) {
     $http.get('phones/phonespic.json').success(function(data) {
       $scope.phones = data;
     });
  
     $scope.orderProp = 'age';
   }]);
  
moreControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams','$http',
   function PhoneDetailCtrl($scope, $routeParams,$http) {
       $http.get('phones/' + $routeParams.phoneId + '.json').success(function (data) {
           $scope.phone = data;
           
       });
       $scope.phoneId = $routeParams.phoneId;
     
   }]);