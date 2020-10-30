angular
  .module("module1", [])
  .controller("controller", function () {})
  .directive("directive", function () {
    return {
      restrict: "AE",
      templateUrl: "my-customer.html",
    };
  });
