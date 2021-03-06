(function () {

    function config($stateProvider, $urlRouterProvider, $logProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/');
        $logProvider.debugEnabled(true);
        $httpProvider.interceptors.push('httpInterceptor');
        $stateProvider
            .state('root', {
                views: {
                    'header': {
                        templateUrl: 'src/common/header.tpl.html',
                        controller: 'HeaderCtrl'
                    },
                    'footer': {
                        templateUrl: 'src/common/footer.tpl.html',
                        controller: 'FooterCtrl'
                    }
                }
            })
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
    }

// main-routes.js
    angular.module('app.routes', ["ui.router", "templates", 'common.interceptors.http'])
        .config(config);
})();
