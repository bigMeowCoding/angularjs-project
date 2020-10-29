angular.module("list").component("list", {
  templateUrl: "list/list.html", // url地址是从项目根目录下算起的
  controller: function ($http) {
    "use strict";
    $http.get("./list/list.json").then((response) => {
      console.log(response);
      this.list = response.data.phones;
    });
    this.query = "";
    this.orderProp = "";
  },
});
