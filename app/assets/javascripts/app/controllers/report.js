// for handling showing the report of the child in profile page

'use strict';

/*
  @params -- user
*/
angular.module('cloudApp').controller('ReportCtrl', ["$scope", "$interval", "Node", "SystemReport", function($scope, $interval, Node, SystemReport) {
  var stop;

  function getNodeReport(){
    $scope.nodes.forEach(function(node){
      SystemReport.getNodeReport({action_id: node._id.$oid}, function(data){
        node.report = data;
      });  
    })
  }

  function fetchNodeReports(){
    getNodeReport();
    stop =$interval(function(){
      getNodeReport();
    }, 6000);
    
  }

  function loadReport(){
    Node.getNodes({}, function(data){
      $scope.nodes = data;
      fetchNodeReports();
    })
  };

  $scope.$on('$destroy', function() {
    $interval.cancel(stop);
  });

  loadReport();
}])