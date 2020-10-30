(function (angular) {
  "use strict";
  angular
    .module("docsRestrictDirective", [])
    .directive("myCustomer", function () {
      return {
        restrict: "AE",
        templateUrl: "my-customer.html",
      };
    });
})(window.angular);

/*
Copyright 2020 Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
