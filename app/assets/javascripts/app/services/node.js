'use strict';

//Model for Event object, consumed on listing / create flows
angular.module('cloudApp').factory('Node', ['$resource', function ($resource) {

  //REST-API for the user is invoked from here
  var Node = $resource('/cluster/:action/:action_id',
    {action: '@action', action_id:'@action_id', },
    {
      'getNodes': { method:'GET', params: {action: 'list'}, isArray: true},
      'getNode': { method:'GET', params: {}},
      'createNode': { method:'POST', params: {action: 'create'}},
      'updateNode': { method:'PUT', params: {}},
      'deleteNode': {method:'DELETE', params: {}}
    });
  return Node;
}]);