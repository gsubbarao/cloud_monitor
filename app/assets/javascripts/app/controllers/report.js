// for handling showing the report of the child in profile page

'use strict';

/*
  @params -- user
*/
angular.module('cloudApp').controller('ReportCtrl', ["$scope", "Node", function($scope, Node) {

  function loadReport(){
    Node.getNodes({}, function(data){
      $scope.nodes = data;
      fetchNodeReport();
    })
  };

  loadReport();
}])