angular.module("list").component("list", {
  templateUrl: "list/list.html", // url地址是从项目根目录下算起的
  controller: function () {
    "use strict";
    this.list = ["list1"];
  },
});
