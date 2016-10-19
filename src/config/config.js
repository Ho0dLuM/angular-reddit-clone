(function () {

  angular.module('freddit')
    .config(['$routeProvider', routes]);

  function routes($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'postPageCtrl',
        controllerAs: 'postPageCtrl',
        templateUrl: './postpage/postpage.html'
      })
      .when('/new-post', {
        controller: 'newPostCtrl',
        controllerAs: 'newPostCtrl',
        templateUrl: './newpost/newpost.html'
      });
  }

})();
