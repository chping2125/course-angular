var demoTpl = require('../tpls/demo16.string');
var commonUtil = require('../utils/common.util.js');
commonUtil.render(demoTpl);

var myApp = angular.module('myApp', []);

myApp.controller('child1Ctrl', function($scope) {
  $scope.action = function() {
    $scope.$emit('parent-ctrl');
    $scope.$broadcast('child-ctrl');
  }
});

myApp.controller('parentCtrl', function ($scope) {
  $scope.$on('parent-ctrl', function(){
    console.log('parentCtrl has been emited~');
  });
  $scope.$on('child-ctrl', function () {
    console.log('childCtrl saved the broadcast info~');
  });
});

myApp.controller('child2Ctrl', function ($scope) {
  $scope.$on('parent-ctrl', function(){
    console.log('---parentCtrl has been emited~');
  });
  $scope.$on('child-ctrl', function () {
    console.log('---siblingCtrl saved the broadcast info~');
  });
});

myApp.controller('grandsonCtrl', function ($scope) {
  $scope.$on('parent-ctrl', function(){
    console.log('parentCtrl has been emited~');
  });
  $scope.$on('child-ctrl', function () {
    console.log('grandsonCtrl saved the broadcast info~');
  });
});
