(function() {

  angular.module('freddit')
    .controller('newPostCtrl', ['$scope', '$location', 'createPost', newPostCtrl
  ]);

  function newPostCtrl($scope, $location, createPost) {
    $scope.newPost = {};

    $scope.addPost = () => {
      if ($scope.postForm.$valid) {
        createPost.addNewPost($scope.newPost);
        $location.path('/');
      }
    };
  }

})();
