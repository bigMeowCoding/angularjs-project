angular
  .module("module1", ["ui.router"])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("home", {
      url: "/home",
      templateUrl: "./home.html",
    });
    $stateProvider
      .state("about", {
        url: "/about",
        templateUrl: "./about.html",
      })
      .state("about.person", {
        url: "/person",
        template: "person",
      })
      .state("about.animal", {
        url: "/animal",
        template: "animal",
      });
    $stateProvider.state("contact", {
      url: "/contact",
      templateUrl: "./contact.html",
    });
  })
  .controller("controller", function ($scope, $timeout) {
    $scope.count = 10;
    $scope.price = 5;
    $scope.compute = function () {
      return $scope.count * $scope.price;
    };
    $scope.login = function () {
      if ($scope.count === $scope.price) {
        console.log("ok");
      } else {
        console.error("erroe");
      }
    };
    $scope.later = function () {
      // setTimeout(() => {
      //   $scope.$apply(function () {
      //     $scope.message = "message";
      //   });
      // }, 1000);
      $timeout(() => {
        $scope.message = "$timer out message";
      }, 3000);
    };
  })
  .directive("directive", function () {
    return {
      restrict: "AE",
      templateUrl: "my-customer.html",
    };
  });
