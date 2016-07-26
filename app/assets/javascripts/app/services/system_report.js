'use strict';

//Model for Event object, consumed on listing / create flows
angular.module('cloudApp').factory('SystemReport', ['$resource', function ($resource) {

  //REST-API for the user is invoked from here
  var SystemReport = $resource('/system_report/:action/:action_id',
    {action: '@action', action_id:'@action_id', },
    {
      'getNodeReport': { method:'GET', params: {action: 'report'}}
    });
  return SystemReport;
}]);