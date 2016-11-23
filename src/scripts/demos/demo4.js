var demoTpl = require('../tpls/demo4.string');
var commonUtil = require('../utils/common.util.js');
commonUtil.render(demoTpl);

angular.module('myApp', [])

.controller('myController', function($scope){
  // $scope.username = 'zhangsan';
});
