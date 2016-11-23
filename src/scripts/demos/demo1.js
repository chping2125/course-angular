var demo1Tpl = require('../tpls/demo1.string');
var commonUtil = require('../utils/common.util.js');
commonUtil.render(demo1Tpl);

var users = [{
  name: 'zhangsan',
  age: 10
}, {
  name: 'lisi',
  age: 30
}];

angular.module('myApp', [])

.controller('myController', function($scope){
  $scope.users = users;
});
