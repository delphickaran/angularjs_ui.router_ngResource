myApp.controller('homeController',['$scope','$resource','myService','countryName',function($scope,$resource,myService, countryName){
    
    $scope.country = countryName.myCountry;
    $scope.$watch('country', function(){                                  
        countryName.myCountry = $scope.country ;  
    });
    $scope.data = myService.query({id:$scope.country});
}]);
myApp.controller('aboutController',['$scope','$resource',function($scope,$resource){
    $scope.country = india;
}]);