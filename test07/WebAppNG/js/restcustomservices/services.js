var phoneServices = angular.module('phoneServices', ['ngResource']);
  
 phoneServices.factory('Phone', ['$resource',
   function($resource){
       return $resource('phones/:phoneId.json', {}, {
       query: {method:'GET', params:{phoneId:'phonespic'}, isArray:true}
     });
   }]);