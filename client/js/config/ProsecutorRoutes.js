inventionApp.config(function($routeProvider){

    $routeProvider
        .when('/', {
            templateUrl: 'partials/prosecutor/prosecutor_summary.html'
        })
        .when('/post/:id', {
            templateUrl: 'partials/prosecutor/bid_on_post.html'
        })
        .when('/accepted_bids', {
            templateUrl: 'partials/prosecutor/accepted_bids.html'
        })
        .when('/accepted_bid/:id', {
            templateUrl: 'partials/prosecutor/view_accepted_bid.html'
        })
        .otherwise({
            redirectTo: '/'
        })

})