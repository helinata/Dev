// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })
  .state('app.vegetarian', {
    url: '/vegetarian',
    views: {
      'menuContent': {
        templateUrl: 'templates/vegetarian.html'
      }
    }
  })

  .state('app.vegan', {
      url: '/vegan',
      views: {
        'menuContent': {
          templateUrl: 'templates/vegan.html',
          controller: 'VeganCtrl'
        }
      }
    })
    .state('app.description', {
      url: '/description',
      views: {
        'menuContent': {
          templateUrl: 'templates/description.html'          
        }
      }
    })

  .state('app.single', {
    url: '/recipeList/',
    views: {
      'menuContent': {
        templateUrl: 'templates/recipeList.html',
        controller: 'RecipesCtrl'
      }
    }
})
  .state('app.recipe', {
    url: '/recipe/',
    views: {
      'menuContent': {
        templateUrl: 'templates/recipe.html',
        controller: 'RecipeCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
