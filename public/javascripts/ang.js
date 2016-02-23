var app = angular.module('reddit', []);



app.controller("MyController", function($scope){
  $scope.posts = [{title: 'Obama is a Scratching Post', author: 'Michelle O', description: 'Kitty Purry sharpens her claws on the POTUS', image: 'http://i.imgur.com/TjWEcSu.jpg', upvotes: 5, date: 1456262040365, showComment: false, comments:[{name: 'Tony', comment: 'This is my comment', date: 1456262040365}], showCommentButtons: true, showExtraButton: true}]
  $scope.showForm = false;

  $scope.ToggleForm = function(){
    $scope.showForm = !$scope.showForm
  }

  $scope.addComment = function(post, name, comment){
    var obj = {}
    obj.name = name
    obj.comment = comment
    obj.date = Date.now()
    post.comments.push(obj);
    post.showCommentForm = !post.showCommentForm
    post.showComment = true
    post.showExtraButton = true;
  }

  $scope.getPost = function(){
    var post = {}
    post.title = $scope.title
    post.author = $scope.author
    post.image = $scope.image
    post.description = $scope.description
    post.upvotes = 0
    post.date = Date.now()
    post.comments = ['a']
    showComment: false
    showCommentForm: false
    $scope.posts.push(post)
    $scope.ToggleForm();
  }

  $scope.downVote = function(post){
    post.upvotes -= 1
  }

  $scope.upVote = function(post){
    post.upvotes += 1
  }

  $scope.toggleComment = function(post){
    post.showComment = !post.showComment
    post.showCommentButtons = !post.showCommentButtons
  }

  $scope.toggleCommentForm = function(post){
    post.showCommentForm = !post.showCommentForm
    post.showCommentButtons = false
    post.showExtraButton = false;
  }





})

console.log('working')
