(function() {
  'use strict';

  /**
   * @name  MabiteCtrl
   * @description Controller
   */

     $(document).ready(function() {
       Materialize.updateTextFields();
     });

  function MabiteCtrl($scope, ReturningVisitorService) {
      $scope.test = "Testsdgfsdfgsgdsgfdsgfsqg";
      if(ReturningVisitorService.get("mabite")) {
          $scope.returning = "Welcome Back !";
      } else {
          $scope.returning = "Welcome";
      }
      ReturningVisitorService.add("mabite");
  }
    MabiteCtrl.$inject = ['$scope', 'ReturningVisitorService'];

  angular.module('mabite', [])
    .controller('MabiteCtrl', MabiteCtrl);


})();
