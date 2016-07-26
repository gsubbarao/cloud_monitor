// Base App for Angular, that would wire up the remaining controllers / services etc.,

'use strict';

//all the directives will be added to this
var componentModule = angular.module('component', ['ngRoute']);

//all the common / models are added to this.. so we can re-use across apps
var cloudApp = angular.module('cloudApp', ['ngRoute', 'ngResource', 'component']);



cloudApp.config(['$routeProvider', function($routeProvider) {
                $routeProvider
                  .when('/dashboard/report', {
                    templateUrl: '/angular_template/report',
                    controller: 'ReportCtrl'
                  })
                  .when('/dashboard/add_node',{
                    templateUrl: '/angular_template/add_node',
                    controller: 'NodeCtrl'
                  })
                  .when('/node/:node_id/report', {
                    templateUrl: '/angular_template/node_report',
                    controller: 'NodeReportCtrl'
                  })
                  
                  .otherwise({
                    redirectTo: '/dashboard/report'
                  });
              }]);
