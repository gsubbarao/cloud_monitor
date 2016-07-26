// for handling showing the report of the child in profile page

'use strict';

/*
  @params -- user
*/
angular.module('cloudApp').controller('NodeCtrl', ["$scope", "$location", "Node", function($scope, $location, Node) {

  $scope.node = {};

  $scope.addNode = function(){
    Node.createNode($scope.node, function(data){
      if(data.status){
        $location.path('node/'+data.id.$oid+'/report')
      }
    });
  };

}])