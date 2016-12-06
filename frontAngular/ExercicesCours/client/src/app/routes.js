// main-routes.js
angular.module('app.routes', ["ui.router"])

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('root.home', {
                url: '/',
                views: {
                    '@': {
                        templateUrl: 'src/app/home/home.tpl.html',
                        controller: 'HomeCtrl as home',
                        resolve: {
                            data: function (DataService) {
                                return DataService.get();
                            }
                        }
                    }
                }
            })
            .state('root.getting-started', {
                url: '/getting-started',
                views: {
                    '@': {
                        templateUrl: 'src/app/getting-started/getting-started.tpl.html',
                        controller: 'GettingStartedCtrl as docs'
                    }
                }
            })
            .state('root.mabite', {
                url: '/mabite',
                views: {
                    '@': {
                        templateUrl: 'src/app/mabite/mabite.tpl.html',
                        controller: 'MabiteCtrl as bite'
                    }
                }
            })
    });