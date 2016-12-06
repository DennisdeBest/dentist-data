(function() {
  'use strict';

  /**
   * @name  MabiteCtrl
   * @description Controller
   */
  function MabiteCtrl($log) {
      var bite = this;
      bite.someMethos = function () {
          $log.debug('I\'m a method');
      };
  }

  angular.module('mabite', [])
    .controller('MabiteCtrl', MabiteCtrl);
})();
