(function() {

  angular.module('freddit')
    .service('createPost', createPost);

  function createPost() {
    var posts = {};
    dummyPosts = [{
      id: 1,
      title: 'League of Legends Worlds 2016',
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
      title: 'League of Legends Worlds 2016',
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
        text: 'Smeb can\'t be stopped!'
      }]
    }];

    posts.getPosts = function() {
      return dummyPosts;
    };

    return posts;
  }

})();
