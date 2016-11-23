var demoTpl = require('../tpls/demo3.string');
var commonUtil = require('../utils/common.util.js');
commonUtil.render(demoTpl);

angular.module('myApp', [])
.controller('myController', function($scope){
  $scope.isShow = false;
});
