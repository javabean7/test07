var DependencyInjectionApp = angular.module('DependencyInjectionApp', []);
 
DependencyInjectionApp.controller('PhoneListCtrl', function PhoneListCtrl($scope, $http) {
$http.get('phones/phones.json').success(function(data) {
     $scope.phones = data;
   });
  
   $scope.orderProp = 'age';
 });