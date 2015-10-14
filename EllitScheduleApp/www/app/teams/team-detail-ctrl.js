(function(){
  'use strict';

  angular
    .module('eliteApp')
    .controller('TeamDetailCtrl', TeamDetailCtrl);



    function TeamDetailCtrl($stateParams, eliteApi, $ionicPopup){
      var vm = this;

      vm.teamId = Number($stateParams.id);


      eliteApi.getLeague().then(function(result){
        console.log(result.data.teams[0].divisionTeams);
        _.findIndex(result.data.teams[0].divisionTeams, function(obj) {
          if(obj.id == vm.teamId)
            vm.details =  obj;
        });

        console.log(vm.details);

        var alert =$ionicPopup.confirm({
          'title': 'teste ionicPopup',
          'template': 'tem certeza disso?'
        });

        alert.then(function(res){
          console.log(res);
        });

      });
    }

    TeamDetailCtrl.$inject = ['$stateParams', 'eliteApi', '$ionicPopup'];
})();
