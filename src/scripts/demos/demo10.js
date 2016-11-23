var demoTpl = require('../tpls/demo10.string');
var commonUtil = require('../utils/common.util.js');
commonUtil.render(demoTpl);

var myApp = angular.module('myApp', []);

myApp.factory('User', function(){
  var user = {
    id: 1,
    name: 'lurongtao',
    email: 'lurongtao@1000phone.com'
  };

  var _getUser = function() {
    return user;
  };

  var _setUser = function(id, name, email) {
    user.id = id;
    user.name = name;
    user.email = email;
  };

  return {
    get: _getUser,
    set: _setUser
  }
});

myApp.controller('showController', function($scope, $log, $timeout, $http, $q, User) {
  $scope.user = User.get();
});

myApp.controller('saveController', function($scope, $log, $timeout, $http, $q, User) {
  $scope.user = User.get();
  $scope.save = function(id, name, email){
    User.set(id, name, email);
  };
});
