angular.module("detail").component("detail", {
  templateUrl: "detail/detail.html", // url地址是从项目根目录下算起的
  controller: function ($http, Phone) {
    "use strict";
    const self = this;
    Phone.get({}, function (response) {
      self.phone = response;
    });
  },
});
