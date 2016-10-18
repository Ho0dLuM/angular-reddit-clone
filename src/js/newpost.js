(function() {

  angular.module('freddit')
    .controller('newPostCtrl', newPostCtrl);

  newPostCtrl.$inject = ['$location', 'createPost'];

  function newPostCtrl($location, createPost) {
    var target = this;
    target.newPost = {};

    target.addPost = (newPost) => {
      createPost.addNewPost(newPost);
      console.log(newPost);
      $location.path('/');
    };
  }

})();
