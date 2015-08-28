(function () {
  var app = angular.module('QuizCards', []);

  app.controller('QuizController', function () {
    var quiz = this;

    quiz.state = 'title';
    quiz.result = 0;
    quiz.question = 0;

    quiz.questions = [
      {
        title: 'What\'s your preferred mode of transportation?',
        answers: [
          'Sailboat',
          'Pedicab',
          'Bicycle',
          'Subway',
          'Tightrope',
          'Hoverboard'
        ],
      },
      {
        title: 'Choose a beer to drink tonight',
        answers: [
          'Pale Ale',
          'Wheat Beer',
          'Dark Beer',
          'Amber Ale',
          'Double IPA',
          'Oktoberfest'
        ],
      },
      {
        title: 'What accessory can you not leave the house without?',
        answers: [
          'Corkscrew',
          'Phone',
          'Sunglasses',
          'Binoculars',
          'Eye Patch',
          'Beret'
        ],
      },
    ];

    quiz.results = [
      {
        title: 'Mega Goth',
        desc:  'The dark hair, clothes, nails, and other various accessories don’t fool anyone. Although you may look like you live in the underworld, you’re truly sweet and super caring.',
        img:   'http://s3-ak.buzzfeed.com/static/2014-06/12/12/tmp/webdr04/733115ba061468eb7f5d8adf52fe396d-10.jpg'
      },
      {
        title: 'Neo Pirate',
        desc:  'You\'re a go-getter who\'s not afraid to take what you want... even if it belongs to someone else. You know your time in this life is limited, so you take every day as it comes and enjoy life on the edge!',
        img:   'http://s3-ak.buzzfeed.com/static/2014-06/12/12/tmp/webdr05/038b6f6a5db653731481ffdc71d9710d-1.jpg'
      },
      {
        title: 'Steampunk',
        desc:  'You\'re the best of both worlds: old and new; wise, yet young; spirited, yet feeble. You appreciate tradition, but you love progress. You\'re very unique, a little quirky, and extremely lovable!',
        img: 'http://s3-ak.buzzfeed.com/static/2014-06/12/12/tmp/webdr06/db645c826bd8cd45bdc35571328a61d0-6.jpg'
      }
    ];

    quiz.tryAgain = function () {
      quiz.state = 'title';
      quiz.result = 0;
      quiz.question = 0;
    };

    quiz.getResult = function () {
      quiz.state = 'result'
      quiz.result = Math.floor(Math.random() * quiz.results.length);
      console.log(quiz.result);
    };

    quiz.nextQuestion = function () {
      quiz.question = quiz.question + 1;
      if (quiz.question >= quiz.questions.length) {
        quiz.state = 'email';
      }
    };
  });
})();
