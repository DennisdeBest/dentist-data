(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  /*
  function config($stateProvider) {
      $stateProvider
          .state('root.mabite', {
              url: '/mabite',
              views: {
                  '@': {
                      templateUrl: 'src/app/mabite/mabite.tpl.html',
                      controller: 'MabiteCtrl as bite'
                  }
              }
          });
  }

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
