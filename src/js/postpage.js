(function() {

  angular.module('freddit')
    .controller('postPageCtrl', ['$scope', 'createPost', postPageCtrl]);

  function postPageCtrl($scope, createPost) {
    $scope.posts = createPost.getPosts();
    $scope.collapsibleElements = [{
      title: ''
    }];
    $scope.newComment = {};
    $scope.filter = '-votes';

    $scope.thumbUp = (id, votes) => {
      const post = createPost.getSinglePost(id)[0];
      createPost.currentVotes(post, votes+1);
      createPost.updatePost(post);
    };

    $scope.thumbDown = (id, votes) => {
      const post = createPost.getSinglePost(id)[0];
      createPost.currentVotes(post, votes-1);
      createPost.updatePost(post);
    };

    $scope.dropdownFilter = (order, filter) => {
      let operator = '';
      if (order === 'descending') {
        operator = '-';
      } else {
        operator = '+';
      }
      $scope.filter = operator + filter;
    };

    $scope.createComment = (id, comment) => {
      const post = createPost.getSinglePost(id)[0];
      createPost.newComment(post, comment);
      $scope.newCommentObj = {};
    };

}

})();
