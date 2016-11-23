var demoTpl = require('../tpls/demo15.string');
var commonUtil = require('../utils/common.util.js');
commonUtil.render(demoTpl);

var myApp = angular.module('myApp', []);

myApp.controller('parentCtrl', function($scope){
  $scope.message = "aaaa";
  $scope.message2 = "parent message2";
  $scope.changeValue = function(){
    $scope.message2 = 'aaaaaaaa';
  }
});

myApp.directive('helloWorld', function(){
  return {
    restrict: 'EA',
    templateUrl: '/src/scripts/tpls/directiveTpl.html',
    replace: true,
    scope: {
      message2: "="
    },
    controller: function($scope){
      $scope.message = "zzzz";
      // $scope.message2 = 'bbbb';
      $scope.changeValue = function() {
        $scope.message2 = 'bbbbbbbbb';
      }
    },
    compile: function(elem, attrs) {
      return function(scope, elem, attrs) {
        // console.log(scope.message);
        elem.on('click', function() {
          console.log(0);
        });
        // console.log(attrs.scrollX);
      }
    }
  }
});
