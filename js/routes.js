(function () {

  angular.module('freddit')
    .config(['$routeProvider', routes]);

  function routes($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'postpage.html'
      });
  }

})();
