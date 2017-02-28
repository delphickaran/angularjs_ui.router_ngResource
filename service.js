myApp.factory('myService',function($resource){
    return $resource('https://restcountries.eu/rest/v2/name/:id')
});
myApp.service('countryName',function(){
    this.myCountry = "india";
});