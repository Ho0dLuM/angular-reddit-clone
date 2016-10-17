(function () {

  angular.module('freddit')
    .config(['$routeProvider', routes]);

  function routes($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'postPageCtrl',
        templateUrl: 'postpage.html'
      })
      .when('/new-post', {
        controller: 'newPostCtrl',
        templateUrl: 'newpost.html'
      });
  }

})();
