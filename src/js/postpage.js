(function() {

  angular.module('freddit')
    .controller('postPageCtrl', postPageCtrl);

  postPageCtrl.$inject = ['createPost'];

  function postPageCtrl(createPost) {
    this.posts = createPost.getPosts();
    this.collapsibleElements = [{
      title: ''
    }];
    this.newComment = {};
    this.filter = '-votes';

    this.thumbUp = (id, votes) => {
      const post = createPost.getSinglePost(id)[0];
      createPost.currentVotes(post, votes + 1);
      createPost.updatePost(post);
    };

    this.thumbDown = (id, votes) => {
      const post = createPost.getSinglePost(id)[0];
      createPost.currentVotes(post, votes - 1);
      createPost.updatePost(post);
    };

    this.dropdownFilter = (order, filter) => {
      let operator = '';
      if (order === 'descending') {
        operator = '-';
      } else {
        operator = '+';
      }
      this.filter = operator + filter;
    };

    this.createComment = (id, comment) => {
      const post = createPost.getSinglePost(id)[0];
      createPost.newComment(post, comment);
      this.newCommentObj = {};
    };

  }

})();
