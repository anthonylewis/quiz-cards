(function () {
  var app = angular.module('QuizCards', []);

  app.controller('QuizController', function () {
    var quiz = this;

    quiz.state = 'title';
  });
})();
