/* jshint camelcase:false */

(function(){
  'use strict';

  angular.module('weather')
  .controller('ConditionsController', ['$scope', 'wu', function($scope, wu){
    $scope.title = 'Current Conditions';

    $scope.getConditions = function(){
      wu.getConditions($scope.zip).then(function(response){
        $scope.temperature = response.data.current_observation.temp_f;
        $scope.icon   = response.data.current_observation.icon_url;
        $scope.feelsLike = response.data.current_observation.feelslike_f;
      });
    };
  }]);
})();
