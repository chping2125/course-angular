var demoTpl = require('../tpls/demo9.string');
var commonUtil = require('../utils/common.util.js');
commonUtil.render(demoTpl);

angular.module('myApp', [])

.controller('myController', function($scope, $log, $timeout, $http, $q) {
  // $log.log('log');
  // $log.info('info');
  // $log.warn('warn');
  // $log.error('error');
  // $log.debug('debug');

  // var timer = null;
  // $scope.gameOn = function() {
  //   $log.debug('game start...');
  //   timer = $timeout(function(){
  //     $scope.gameOver();
  //   }, 3000);
  // };
  //
  // $scope.gameOver = function() {
  //   $log.debug('game over...');
  //   $timeout.cancel(timer);
  // };

  // $scope.items = [];
  // $http.get('/mock/app.json')
  //   .then(function(res){
  //     $scope.items = res.data.data;
  //   }, function(){
  //
  //   })
  // $http({
  //   url: '/mock/app.json'
  // }).then(function(){
  //   $scope.items = res.data.data;
  // })

  // var defer = $q.defer();
  //
  // var data = {
  //   status: 'ok',
  //   userName: 'lurongtao'
  // };
  //
  // $timeout(function(){
  //   defer.resolve(data);
  // }, 3000);
  //
  // defer.promise
  //   .then(function(res){
  //     console.log(res);
  //   }, function(){
  //     console.log('fail');
  //   })

});
