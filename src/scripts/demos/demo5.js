var demoTpl = require('../tpls/demo5.string');
var commonUtil = require('../utils/common.util.js');
commonUtil.render(demoTpl);

angular.module('myApp', [])

.controller('myController', function($scope){
  $scope.counter = 0;
  $scope.add = function(){
    $scope.counter++;
  }
});
