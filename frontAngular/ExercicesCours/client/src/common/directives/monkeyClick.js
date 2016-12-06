(function() {
    'use strict';

    function monkeyClickDirective() {
            return "DirectiveTest";
    }

    angular.module('common.directives.monkeyClick', [])
        .directive('monkeyClick', monkeyClickDirective);
})();
