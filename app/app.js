angular
  .module("module1", ["ui.router", "ngMessages"])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("form", {
        url: "/form",
        templateUrl: "./form/form.html",
      })
      .state("contact", {
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
