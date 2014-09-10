var filterApp = angular.module('filterApp', [
   'ngRoute',
   'filterControllers',
   'phoneFilters']);
 filterApp.config(['$routeProvider',
   function($routeProvider) {
     $routeProvider.
       when('/phones', {
           templateUrl: 'partials/filters/phone-list2.html',
         controller: 'PhoneListCtrl'
       }).
       when('/phones/:phoneId', {
           templateUrl: 'partials/filters/phone-detail2.html',
         controller: 'PhoneDetailCtrl'
       }).
       otherwise({
         redirectTo: '/phones'
       });
   }]);

 