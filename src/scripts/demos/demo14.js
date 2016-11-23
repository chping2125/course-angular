var demoTpl = require('../tpls/demo14.string');
var commonUtil = require('../utils/common.util.js');
commonUtil.render(demoTpl);

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.caseInsensitiveMatch = true;
  $routeProvider
    .when('/home', {
      templateUrl: '/src/scripts/tpls/route/home.html',
      controller: 'homeController'
    })
    .when('/course', {
      templateUrl: '/src/scripts/tpls/route/courses.html',
      controller: 'courseController',
      controllerAs: 'courseCtrl'
    })
    .when('/employee', {
      templateUrl: '/src/scripts/tpls/route/employees.html',
      controller: 'employeeController',
      resolve: {
        employeelist: function($http, $q) {
          return $http.get('/mock/employee.json').then(function(res){
            return res.data.data;
          });
        }
      }
    })
    .when('/employee/:abc', {
      templateUrl: '/src/scripts/tpls/route/employeedetail.html',
      controller: 'employeeDetailController'
    })
    .when('/employeeSearch/:keywords', {
      templateUrl: '/src/scripts/tpls/route/employeeSearch.html',
      controller: 'employeeSearchController'
    })
    .otherwise({
      redirectTo: '/home'
    })
}]);

myApp.controller('homeController', ['$scope', '$rootScope', function($scope, $rootScope){
  $scope.message = 'home page';
  // $rootScope.$on('$routeChangeStart', function(event, next, cur){
  //   if (confirm('你真的要跳转到' + next.$$route.originalPath)) {
  //     ;
  //   } else {
  //     event.preventDefault();
  //   }
  // });
  //
  // $rootScope.$on('$routeChangeSuccess', function(event, next, cur){
  //   console.log(cur.$$route.originalPath);
  // });
  //
  // $rootScope.$on('$routeChangeError', function(event, next, cur){
  //   console.log(cur.$$route.originalPath);
  // });
}]);

myApp.controller('courseController', ['$scope', '$rootScope', function($scope, $rootScope){
  var vm  = this;
  vm.courses = ['html5', 'java', 'android', 'iOS'];
  $rootScope.color = 'red';
}]);

myApp.controller('employeeController', ['$scope', '$http', '$route', '$rootScope', '$location', 'employeelist', function($scope, $http, $route, $rootScope, $location, employeelist){
  var vm  = $scope;

  vm.keywords = "";
  vm.search = function() {
    if (vm.keywords) {
      $location.url('/employeeSearch/' + vm.keywords);
    }
  };

  vm.reload = function() {
    $route.reload();
  };

  // $http({
  //   url: '/mock/employee.json'
  // })
  // .then(function(res){
  //   vm.employees = res.data.data;
  // }, function(){
  //   ;
  // })
  vm.employees = employeelist;
}]);

myApp.controller('employeeDetailController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
  $http({
    url: '/mock/employeedetail.json',
    params: {
      id: $routeParams.abc
    },
    method: 'get'
  })
  .then(function(res){
    $scope.employee = res.data.data[0];
  })
}]);

myApp.controller('employeeSearchController', ['$scope', '$routeParams', function($scope, $routeParams){
  $scope.keywords = $routeParams.keywords;
}]);
