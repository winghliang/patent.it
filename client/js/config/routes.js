inventionApp.config(function($routeProvider){

    $routeProvider
        .when('/', {
            templateUrl: 'partials/inventor_dash.html'
        })
        .when('/inventor', {
            templateUrl: 'partials/inventor.html'
        })
        .when('/prosecutor', {
            templateUrl: 'partials/prosecutor.html'
        })
        .otherwise({
            redirectTo: '/'
        })

})