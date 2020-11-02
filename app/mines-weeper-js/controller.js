minesweeper.controller("MinesweeperController", function (
  $scope,
  mineFieldService
) {
  $scope.minefield = mineFieldService.createMinefield();
});
