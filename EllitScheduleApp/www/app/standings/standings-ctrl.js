(function(){
  'use strict';

  angular
    .module('eliteApp')
    .controller('standingsCtrl', standingsCtrl);



    function standingsCtrl(eliteApi){
      var vm = this;

      eliteApi.getLeague().then(function(result){
          console.log(result.data.standings[0].divisionStandings);
          vm.standings = result.data.standings[0].divisionStandings;
      });
    }

    standingsCtrl.$inject = ['eliteApi'];
})();
