/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <pritish.chandak@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('webApp',['ngRoute']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "view/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "view/about.html", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "view/faq.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "view/pricing.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "view/services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "view/contact.html", controller: "PageCtrl"})
    // Blog
    .when("/blog", {templateUrl: "view/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "view/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "view/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function ($scope, $location, $http ) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});