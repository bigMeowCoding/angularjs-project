angular
  .module("form", [])

  .component("loginForm", {
    templateUrl: "form/form.html",
    controller: function ($scope) {
      this.mes = "hahaha";
    },
  });
