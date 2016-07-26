// for handling showing the report of the child in profile page

'use strict';

/*
  @params -- user
*/
angular.module('cloudApp').controller('NodeReportCtrl', ["$scope", "$routeParams", "$interval", "$window", "Node", "SystemReport", function($scope, $routeParams, $interval, $window, Node, SystemReport) {
  var stop;

  $scope.host = $window.location.origin
  function getNodeReport(){
    SystemReport.getNodeReport({action_id: $routeParams.node_id}, function(data){
      $scope.node.report = data;
    });
  }

  function fetchNodeReport(){
    getNodeReport();
    stop =$interval(function(){
      getNodeReport();
    }, 6000);
    
  }

  function loadNodeReport(){
    Node.getNode({action: $routeParams.node_id}, function(data){
      $scope.node = data;
      fetchNodeReport();
    })
  }

  $scope.$on('$destroy', function() {
    $interval.cancel(stop);
  });

  loadNodeReport();
}])