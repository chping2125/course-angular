var demoTpl = require('../tpls/demo12.string');
var commonUtil = require('../utils/common.util.js');
commonUtil.render(demoTpl);

var myApp = angular.module('myApp', []);

myApp.filter('gender', function(){
  return function(g){
    switch(g) {
      case 0:
        return '男';
      case 1:
        return '女';
      default:
        return '其他';
    }
  };
});

myApp.controller('showController', function($scope) {
  var persons = [
    {
      name: 'chping',
      age: 21,
      gender: 0
    },
    {
      name: 'chengping',
      age: 20,
      gender: 0
    },
    {
      name: 'chyan',
      age: 19,
      gender: 1
    }
  ];

  $scope.persons = persons;
});
