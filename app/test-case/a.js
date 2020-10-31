angular
  .module("module1", [])
  .controller("controller", function ($scope) {
      $scope.count = 10;
      $scope.price = 5;
    $scope.compute = function () {

      return $scope.count * $scope.price;
    };
    $scope.login = function () {
        if($scope.count === $scope.price) {
            console.log('ok')
        } else  {
            console.error('erroe')
        }
    }
  })
  .directive("directive", function () {
    return {
      restrict: "AE",
      templateUrl: "my-customer.html",
    };
  });
