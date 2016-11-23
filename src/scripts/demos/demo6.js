var demoTpl = require('../tpls/demo6.string');
var commonUtil = require('../utils/common.util.js');
commonUtil.render(demoTpl);

angular.module('myApp', [])

.controller('myController', function($scope){

  $scope.item = "";

  $scope.items = [
    "aaa"
  ];

  $scope.remove = function(i) {
    $scope.items.splice(i, 1);
  };

  $scope.add = function(event){
    if(event.code === 'Enter') {
      $scope.items.unshift($scope.item);
      $scope.item = "";
    }
  }
});
