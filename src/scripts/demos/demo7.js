var demoTpl = require('../tpls/demo7.string');
var commonUtil = require('../utils/common.util.js');
commonUtil.render(demoTpl);

angular.module('myApp', [])

.controller('myController', function($scope){

  var items = [
    {title: '权利的游戏', subscribe: true, updated: 1458691234},
    {title: '真探', subscribe: false, updated: 1458777656},
    {title: '黑吃黑', subscribe: true, updated: 1458864234},
    {title: '大西洋帝国', subscribe: true, updated: 1458950499},
    {title: '罗马', subscribe: false, updated: 1459036887}
  ];

  $scope.items = items;

  $scope.limit = 4;

  $scope.price = 234.56;

});
