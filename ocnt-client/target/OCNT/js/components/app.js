(function(ocnt){
angular
	.module('OCNT',['ui.router','ui.bootstrap','ngGrid']);

ocnt.app = angular.module('OCNT');
ocnt.app.config(['$urlRouterProvider','$stateProvider',
	                         function($urlRouterProvider,$stateProvider){
	                	$urlRouterProvider.otherwise('/');
	                	$stateProvider.state('movementPlus',{
	                		url:'/',
	                		templateUrl: '/OCNT/view/templates/main_content/movement_hu_plus.html',
	                		controller: 'movementCtrl'
	                	});
					}]);
}) (window.ocnt = window.ocnt || {});