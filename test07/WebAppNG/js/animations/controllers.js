var animationControllers = angular.module('animationControllers', []);
  
animationControllers.controller('PhoneListCtrl', ['$scope', '$http',
   function PhoneListCtrl($scope, $http) {
     $http.get('phones/phonespic.json').success(function(data) {
       $scope.phones = data;
     });
  
     $scope.orderProp = 'age';
   }]);
  
animationControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
   function PhoneDetailCtrl($scope, $routeParams,$http) {
       $http.get('phones/' + $routeParams.phoneId + '.json').success(function (data) {
           $scope.phone = data;
           $scope.mainImageUrl = data.images[0];
           
       });
       $scope.phoneId = $routeParams.phoneId;
      
       $scope.setImage = function (imageUrl) {
           $scope.mainImageUrl = imageUrl;
       }
   }]);