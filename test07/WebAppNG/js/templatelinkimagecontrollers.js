var TemplateLinkImageApp = angular.module('TemplateLinkImageApp', []);
 
TemplateLinkImageApp.controller('PhoneListCtrl', function PhoneListCtrl($scope, $http) {
$http.get('phones/phonespic.json').success(function(data) {
     $scope.phones = data;
   });
  
   $scope.orderProp = 'age';
 });