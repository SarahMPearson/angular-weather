(function(){
  'use strict';

  angular.module('weather', ['ngRoute']) //ngRoute = this is angular-route
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/conditions', {templateUrl:'/views/conditions/conditions.html', controller:'ConditionsController'})
    .when('/webcams', {templateUrl:'/views/webcams/webcams.html', controller:'WebcamsController'})
    .when('/forecast', {templateUrl:'/views/10day/10day.html', controller:'TenDayController'})
    .otherwise({redirectTo:'/webcams'});
  }])
  .controller('MainController', ['$scope', function($scope){
    $scope.title = 'Weather';
  }]);
})();

