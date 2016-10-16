(function() {

  angular.module('freddit')
  .controller('postPageCtrl', ['$scope', postPageCtrl]);

  function postPageCtrl($scope) {
    console.log('postpage.js');
  }

})();
