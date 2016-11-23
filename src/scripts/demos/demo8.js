var demoTpl = require('../tpls/demo8.string');
var commonUtil = require('../utils/common.util.js');
commonUtil.render(demoTpl);

angular.module('myApp', [])

.controller('myController', function($scope) {
    var friends = [{
        name: 'John',
        phone: '555-1276'
    }, {
        name: 'Mary',
        phone: '800-BIG-MARY'
    }, {
        name: 'Mike',
        phone: '555-4321'
    }, {
        name: 'Adam',
        phone: '555-5678'
    }, {
        name: 'Julie',
        phone: '555-8765'
    }, {
        name: 'Juliette',
        phone: '555-5678'
    }];

    $scope.friends = friends;
    $scope.searchText = '';

    $scope.search = function(value) {
      if($scope.searchText != ""){
        if(value.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 || value.phone.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    }
});
