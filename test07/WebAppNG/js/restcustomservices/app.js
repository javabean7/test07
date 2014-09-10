var restApp = angular.module('restApp', [
   'ngRoute',
   'restControllers',
   'phoneServices'
]);
restApp.config(['$routeProvider',
   function($routeProvider) {
     $routeProvider.
       when('/phones', {
           templateUrl: 'partials/moreTemplate/phone-list1.html',
         controller: 'PhoneListCtrl'
       }).
       when('/phones/:phoneId', {
           templateUrl: 'partials/moreTemplate/phone-detail1.html',
         controller: 'PhoneDetailCtrl'
       }).
       otherwise({
         redirectTo: '/phones'
       });
   }]);

 