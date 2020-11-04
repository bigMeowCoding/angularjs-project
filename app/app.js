var module1 = angular
  .module("module1", ["ui.router", "form", "ngMessages"])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("form", {
        url: "/form",
        component: "loginForm",
      })
      .state("lilei", {
        url: "/lilei",
        templateUrl: "lilei.html",
        controller: "controller1",
      })
      .state("jack", {
        url: "/jack",
        templateUrl: "jack.html",
        controller: "controller2",
      });
  })
  .controller("controller1", function ($scope) {
    $scope.name = "lilei";
  })
  .controller("controller2", function ($scope) {
    $scope.name = "jack";
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
        console.log(scope.name);
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
