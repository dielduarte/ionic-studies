(function(){
  'use strict';

  angular
    .module('eliteApp')
    .controller('locationsCtrl', locationsCtrl);

    locationsCtrl.$inject = ['eliteApi', '$state'];

    function locationsCtrl(eliteApi, $state){
      var vm = this;


      eliteApi.getLeague().then(function(result){
          console.log(result.data.locations);
          vm.locations = result.data.locations;
      });


    };
})();
