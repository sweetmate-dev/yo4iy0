
var app = angular.module('yogiyo', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('YouTubeController', ["$http", function($http){
    var vm = this;
    vm.videos = [
        {
            title:"video1",
            date:"1-1-2016",
            thumbnail:"http://lorempixel.com/image_output/food-q-c-250-250-8.jpg"
        },
        {
            title:"video1",
            date:"1-1-2016",
            thumbnail:"http://lorempixel.com/image_output/food-q-c-250-250-8.jpg"
        }
    ];
    
}])