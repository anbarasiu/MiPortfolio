'use strict';

angular.module('miPortfolioApp')
  .controller('MainCtrl', function ($scope, $location, $anchorScroll) {
      
$scope.heightCalculator = {height : window.innerHeight + "px"};
      
$scope.scrollToNext = function(e){
    $location.hash(e.parent("section").next().attr("id")    );
    $anchorScroll();
};
      
$scope.scrollToElement = function(e){
    $location.hash(e);
    $anchorScroll();
    };
});