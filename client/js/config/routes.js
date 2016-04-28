inventionApp.config(function($routeProvider){

    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html'
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