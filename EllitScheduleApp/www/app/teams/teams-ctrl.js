(function(){
  'use strict';

  angular
    .module('eliteApp')
    .controller('teamsCtrl', teamsCtrl);



    function teamsCtrl(eliteApi){
      var vm = this;

      eliteApi.getLeague().then(function(result){
          vm.teams = result.data.teams[0].divisionTeams;
      });
    }

    teamsCtrl.$inject = ['eliteApi'];
})();
