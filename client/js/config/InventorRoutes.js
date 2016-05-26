inventionApp.config(function($routeProvider){

    $routeProvider
        .when('/', {
            templateUrl: 'partials/inventor/inventor_summary.html'
        })
        .when('/new_post', {
        	templateUrl: 'partials/inventor/new_post.html'
        })
        .when('/pending_posts', {
            templateUrl: 'partials/inventor/pending_posts.html'
        })
        .when('/edit_post/:id', {
            templateUrl: 'partials/inventor/edit_post.html'
        })
        .when('/post/:id', {
            templateUrl: 'partials/inventor/view_post.html'
        })        
        .otherwise({
            redirectTo: '/'
        })

})