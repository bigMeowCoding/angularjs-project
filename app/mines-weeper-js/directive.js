minesweeper.directive("mineGrid", function () {
  return {
    restrict: "AE",
    replace: false,
    templateUrl: "templates/mineGrid.html",
  };
});

// 自定义ngRightClick指令，处理鼠标右键事件
minesweeper.directive("ngRightClick", function ($parse) {
  return function (scope, element, attrs) {
    console.log('sdf')
    var fn = $parse(attrs.ngRightClick);
    element.bind("contextmenu", function (event) {
      // scope.$apply(function () {
      console.log(event);
      event.preventDefault();
      fn(scope, { $event: event });
    });
    // });
  };
});
