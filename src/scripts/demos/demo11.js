var demoTpl = require('../tpls/demo11.string');
var commonUtil = require('../utils/common.util.js');
commonUtil.render(demoTpl);

var myApp = angular.module('myApp', []);

myApp.controller('provinceController', function($scope) {
  this.name = "taiwan";
});
myApp.controller('cityController', function($scope) {
  this.name = "taibei";
});
myApp.controller('sectionController', function($scope) {
  this.name = "qianfeng";
});
