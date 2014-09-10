var animationApp = angular.module('animationApp', [
   'ngRoute',
   'animationControllers',
   'phoneAanimation' 
]);
animationApp.config(['$routeProvider',
   function($routeProvider) {
     $routeProvider.
       when('/phones', {
           templateUrl: 'partials/animations/phone-list4.html',
         controller: 'PhoneListCtrl'
       }).
       when('/phones/:phoneId', {
           templateUrl: 'partials/animations/phone-detail4.html',
         controller: 'PhoneDetailCtrl'
       }).
       otherwise({
         redirectTo: '/phones'
       });
   }]);

 