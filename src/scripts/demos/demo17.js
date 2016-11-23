var demoTpl = require('../tpls/demo17.string');
var commonUtil = require('../utils/common.util.js');
commonUtil.render(demoTpl);

var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($urlRouterProvider){
  $urlRouterProvider.otherwise('/home');
});

myApp.config(function($urlMatcherFactoryProvider){
  $urlMatcherFactoryProvider.caseInsensitive(false);
});

myApp.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/src/scripts/tpls/ui-router/home.html',
      controller: 'homeController',
      controllerAs: 'homeCtrl',
      data: {
        customData: 'home自定义数据'
      }
    })
    .state('course', {
      url: '/course',
      templateUrl: '/src/scripts/tpls/ui-router/courses.html',
      controller: 'courseController',
      controllerAs: 'courseCtrl',
      data: {
        customData: 'course自定义数据'
      }
    })

    .state('employeeParent', {
      url: '/employee',
      templateUrl: '/src/scripts/tpls/ui-router/employeeParent.html',
      controller: 'employeeParentController'
    })
    .state('employeeParent.employee', {
      url: '/',
      templateUrl: '/src/scripts/tpls/ui-router/employees.html',
      controller: 'employeeController',
      controllerAs: 'employeeCtrl',
      resolve: {
        employeelist: function($http) {
          return $http.get('/mock/employee.json').then(function(res){
            return res.data.data;
          });
        }
      }
    })
    .state('employeeParent.employeeDetail', {
      url: '/:id',
      templateUrl: '/src/scripts/tpls/ui-router/employeedetail.html',
      controller: 'employeeDetailController'
    })

    .state('employeeSearch', {
      url: '/employeeSearch/:keywords',
      templateUrl: '/src/scripts/tpls/ui-router/employeeSearch.html',
      controller: 'employeeSearchController'
    })
}]);

myApp.controller('homeController', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state){
  $scope.message = 'home page';
  $scope.customData2 = $state.get('course').data.customData;
  $scope.customData1 = $state.current.data.customData;
}]);

myApp.controller('courseController', ['$scope', '$rootScope', function($scope, $rootScope){
  var vm  = this;
  vm.courses = ['html5', 'java', 'android', 'iOS'];
  $rootScope.color = 'red';
}]);

myApp.controller('employeeController', ['$scope', '$http', '$state', '$rootScope', 'employeelist', function($scope, $http, $state, $rootScope, employeelist){
  var vm  = this;

  vm.keywords = "";
  vm.search = function() {
    if (vm.keywords) {
      console.log($state);
      $state.go('employeeSearch', {
        keywords: vm.keywords
      })
      // $location.url('/employeeSearch/' + vm.keywords);
    }
  };

  vm.reload = function() {
    $state.reload();
  };

  vm.employees = employeelist;
}]);

myApp.controller('employeeDetailController', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http){
  $http({
    url: '/mock/employeedetail.json',
    params: {
      id: $stateParams.id
    },
    method: 'get'
  })
  .then(function(res){
    $scope.employee = res.data.data[0];
  })
}]);

myApp.controller('employeeSearchController', ['$scope', '$stateParams', function($scope, $stateParams){
  $scope.keywords = $stateParams.keywords;
}]);

myApp.controller('employeeParentController', function($scope){
  ;
});
