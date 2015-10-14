(function(){
  'use strict';

  angular
    .module('eliteApp')
    .controller('rulesCtrl', rulesCtrl);

    rulesCtrl.$inject = ['eliteApi', '$state'];

    function rulesCtrl(eliteApi, $state){
      var vm = this;


      eliteApi.getLeague().then(function(result){
          vm.rules = result.data.league.rulesScreen;
      });


    };
})();
