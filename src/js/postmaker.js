(function() {

  angular.module('freddit')
    .service('createPost', createPost);

  function createPost() {
    var posts = {};
    dummyPosts = [{
      id: 1,
      title: 'League of Legends Worlds 2016 Champs will be SKT!!',
      author: 'FakerFan',
      image: '../assets/SKT.png',
      description: 'SKT will win again with Faker carrying from mid lane!',
      date: moment('2016 10 12', 'YYYY MM DD').calendar(null, {
        sameDay: '[Today]',
        nextDay: '[Tomorrow]',
        nextWeek: 'dddd',
        lastDay: '[Yesterday]',
        lastWeek: '[Last] dddd',
        sameElse: 'dddd, MMMM Do YYYY'
      }),
      votes: 0,
      comments: [{
        author: 'JH0',
        text: 'ANX FTW!!'
      }]
    },{
      id: 2,
      title: 'Worlds 2016 ROX tigers FTW!!',
      author: 'SmebTheBest',
      image: '../assets/ROX.png',
      description: 'Smeb is the best player in the world and will prove it by destroying the competition!',
      date: moment('2016 10 15', 'YYYY MM DD').calendar(null, {
        sameDay: '[Today]',
        nextDay: '[Tomorrow]',
        nextWeek: 'dddd',
        lastDay: '[Yesterday]',
        lastWeek: '[Last] dddd',
        sameElse: 'dddd, MMMM Do YYYY'
      }),
      votes: 0,
      comments: [{
        author: 'RoXFaN',
        color: 'black',
        text: 'Smeb can\'t be stopped!'
      }]
    }];

    posts.getPosts = () => {
      return dummyPosts;
    };

    posts.getSinglePost = (postID) => {
      return dummyPosts.filter((post) => {
        return post.id === parseInt(postID);
      });
    };

    posts.currentVotes = (post, voteTally) => {
      dummyPosts[post.id - 1].votes = parseInt(voteTally);
    };

    posts.updatePost = (postToUpdate) => {
      if (postToUpdate.votes > 0) {
        postToUpdate.color = 'green';
      } else if (postToUpdate.votes < 0) {
        postToUpdate.color = 'red';
      } else {
        postToUpdate.color = 'black';
      }
    };

    posts.newComment = (post, comment) => {
      dummyPosts[post.id - 1].comments.push(comment);
    };

    posts.addNewPost = (newPost) => {
      const getID = dummyPosts[dummyPosts.length - 1].id;
      newPost.id = getID + 1;
      newPost.date = moment(new Date()).calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'dddd, MMMM Do YYYY'
        });
      newPost.votes = 0;
      newPost.comments = [];
      dummyPosts.push(newPost);
    };

    return posts;
  }

})();
