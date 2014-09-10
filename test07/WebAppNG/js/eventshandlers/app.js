var eventApp = angular.module('eventApp', [
   'ngRoute',
   'eventControllers'
]);
eventApp.config(['$routeProvider',
   function($routeProvider) {
     $routeProvider.
       when('/phones', {
           templateUrl: 'partials/eventhandlers/phone-list3.html',
         controller: 'PhoneListCtrl'
       }).
       when('/phones/:phoneId', {
           templateUrl: 'partials/eventhandlers/phone-detail3.html',
         controller: 'PhoneDetailCtrl'
       }).
       otherwise({
         redirectTo: '/phones'
       });
   }]);

 