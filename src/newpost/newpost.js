(function() {

  angular.module('freddit')
    .controller('newPostCtrl', newPostCtrl);

  newPostCtrl.$inject = ['$location', 'createPost'];

  function newPostCtrl($location, createPost) {
    this.newPost = {};

    this.addPost = (newPost) => {
      createPost.addNewPost(newPost);
      $location.path('/');
    };
  }

})();
