var demoTpl = require('../tpls/demo9.string');
var commonUtil = require('../utils/common.util.js');
commonUtil.render(demoTpl);

angular.module('myApp', [])
.controller('myController', function($scope, $log, $timeout, $http, $q) {
  //$log的使用，相当于 console
  $log.log('log');
  $log.info('info');
  $log.warn('warn');
  $log.error('error');
  $log.debug('debug');

  //$timeout 的使用
  var timer = null;
  $scope.gameOn = function() {
    $log.debug('game start...');
    timer = $timeout(function(){
      $scope.gameOver();
    }, 3000);
  };

  $scope.gameOver = function() {
    $log.debug('game over...');
    $timeout.cancel(timer);
  };

  //$http 请求使用
  $scope.items = [];
  $http.get('/mock/app.json')
    .then(function(res){
      $scope.items = res.data.data;
    }, function(err){
      //失败回调
    });

  //下面是另一种使用方式
  $http({
    url: '/mock/app.json'
  }).then(function(res){
    $scope.items = res.data.data;
  })

  //利用$q来实现promise异步编程
  var defer = $q.defer();
  var data = {
    status: 'ok',
    userName: 'lurongtao'
  };

  $timeout(function(){
    defer.resolve(data);
  }, 3000);

  defer.promise
    .then(function(res){
      //成功回调
      console.log(res);
    }, function(){
      //失败回调
      console.log('fail');
    })

});
