var module1 = angular.module("module1", ["ngRoute", "detail", "list", "core"]);
module1.config([
  "$routeProvider",
  function config($routeProvider) {
    "use strict";
    $routeProvider
      .when("/phones", {
        template: "<list></list>",
      })
      .when("/phones/:phoneId", {
        template: "<detail></detail>",
      })
      .otherwise("/phones");
  },
]);
