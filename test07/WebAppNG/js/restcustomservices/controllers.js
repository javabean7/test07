var restControllers = angular.module('restControllers', []);
  
restControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
   function PhoneListCtrl($scope, Phone) {
       $scope.phones=Phone.query();
       $scope.orderProp = 'name';
     }]);  
    
   
  
restControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
   function PhoneDetailCtrl($scope, $routeParams, Phone) {
       
       $scope.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
           $scope.mainImageUrl = phone.images[0];
       });

       $scope.phoneId = $routeParams.phoneId;
       $scope.setImage = function(imageUrl) {
                  $scope.mainImageUrl = imageUrl;
                }
   }]);

 