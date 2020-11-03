var module1 = angular
  .module("module1", ["ui.router", "form", "ngMessages"])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("form", {
        url: "/form",
        component: "loginForm",
      })
      .state("contact", {
        url: "/contact",
        templateUrl: "./contact.html",
      });
  })
  .controller("controller", function ($scope, $timeout) {
    $scope.count = 10;
    $scope.price = 5;
    $scope.obj = {};
    $scope.name = "name";
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
    $scope.change = function () {
      console.log("change");
      $scope.obj.message = "change message";
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
  })
  .directive("alert", function ($parse) {
    return {
      restrict: "AE",
      templateUrl: "alert.html",
      link: function (scope, element, attrs) {
        element.bind("click", function (event) {
          var fn = $parse(attrs.alertFun);
          scope.$apply(function () {
            event.preventDefault();
            fn(scope);
          });
        });
      },
    };
  });

module1.component("contact", {
  templateUrl: "contact.html",
  bindings: {
    change: "&",
  },
  controller: function ($scope) {
    this.changeMessage = function () {
      console.log("sdf");
      $scope.change();
    };
  },
});
