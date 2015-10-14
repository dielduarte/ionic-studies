(function(){
  'use strict';

  angular
    .module('eliteApp')
    .controller('leaguesCtrl', leaguesCtrl);

    leaguesCtrl.$inject = ['eliteApi', '$state'];

    function leaguesCtrl(eliteApi, $state){
      var vm = this;


      eliteApi.getLeague().then(function(result){
        console.log(result.data.league);
          vm.leagues = result.data.league;
      });

      vm.selectLeague = function(leagueId) {
        $state.go('app.teams');
      }

    };
})();
