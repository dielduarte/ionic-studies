(function(){
  'use strict';

  angular
    .module('eliteApp')
    .factory('eliteApi', eliteApi);

    eliteApi.$inject = ['$http'];

    function eliteApi($http) {
      return  {
        getLeague: getLeague
      };


      function getLeague(){
        return $http.get('app/services/leagues.json');
      };
    }
})();
