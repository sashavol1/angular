  //Модуль
  var app = angular.module("mailApp", []);

  app.controller('GetDataCtrl', function (DataNewsSevice) {
    var _this = this;
      DataNewsSevice.getData().then(function (response) {
          _this.articles = response.data;
          console.log(_this.articles);
      });
  });

  app.service('DataNewsSevice', function ($http) {
      this.getData = function (callback) {
          return $http.get('http://beta.json-generator.com/api/json/get/4yTlWTgob');
      }
  });

  app.directive('mailList', function () {
      return {
        scope: {
            name: "@"
        },
        restrict: 'E',
        templateUrl:'list.html',
        controller: 'GetDataCtrl',
        controllerAs: 'getDataCtrl'
      }
  });

  app.directive('detailList', function () {
      return {
        restrict: 'E',
        templateUrl:'detail.html'
      }
  });

  app.directive('navsMenu', function () {
      return {
        restrict: 'E',
        templateUrl:'navs.html'
      }
  });

app.controller('MailCtrl', function () {

    this.dataSomeDifferent = {
        name: 'Oleg',
        age: 15
    };

    this.inbox = true;
    this.sent = false;
    this.spam = false;

    this.active = '';

   this.changeSection = function (index) {

       if(index === 1) {
            this.inbox = true;
            this.sent = false;
            this.spam = false;
            this.active = 'active';
       } else if (index===2) {
            this.inbox = false;
            this.sent = true;
            this.spam = false;
            this.active = 'active';
       } else {
            this.inbox = false;
            this.sent = false;
            this.spam = true;
            this.active = 'active';
       }
   }

});
