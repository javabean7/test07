var mainDetailApp = angular.module('mainDetailApp', [
   'ngRoute',
   'mainDetailControllers'
 ]); 
mainDetailApp.config(['$routeProvider',
   function($routeProvider) {
     $routeProvider.
       when('/phones', {
           templateUrl: 'partials/multiView/phone-list.html',
         controller: 'PhoneListCtrl'
       }).
       when('/phones/:phoneId', {
           templateUrl: 'partials/multiView/phone-detail.html',
         controller: 'PhoneDetailCtrl'
       }).
       otherwise({
         redirectTo: '/phones'
       });
   }]);