inventionApp.config(function($routeProvider){

    $routeProvider
        .when('/', {
            templateUrl: 'partials/prosecutor/prosecutor_summary.html'
        })
        .when('/post/:id', {
            templateUrl: 'partials/prosecutor/bid_on_post.html'
        })
        .otherwise({
            redirectTo: '/'
        })

})