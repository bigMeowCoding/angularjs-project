// app.js
let routerApp = angular
  .module("note", [])
  .controller("noteCtrl", function ($scope) {
    $scope.noteName = "";
    $scope.noteList = [
      {
        name: "miission1",
        id: "id",
      },
    ];
    $scope.addMission = function (e) {
      console.log(e);
      $scope.noteList.push({
        id: Math.random(),
        name: $scope.noteName,
      });
      $scope.noteName = "";
    };
    $scope.removeMission = function (id) {
      $scope.noteList = $scope.noteList.filter((item) => {
        return item.id !== id;
      });
      console.log($scope.noteList, id);
    };
    $scope.editMission = function (id, isEditing) {
      const note = $scope.noteList.find((item) => {
        return item.id === id;
      });
      note.isEditing = !isEditing;
    };
  });
