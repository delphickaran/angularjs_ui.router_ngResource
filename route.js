myApp.config(function($stateProvider){
    $stateProvider
    .state('home',{
        url:'/home',
        templateUrl:'home.html',
        controller:'homeController'
    })
    .state('about',{
        url:'/about',
        templateUrl:'about.html',
        controller:'aboutController'
    })
    .state('country',{
        url:'/country',
        templateUrl:'country.html',
        controller:'homeController'
        
    })
    
});
