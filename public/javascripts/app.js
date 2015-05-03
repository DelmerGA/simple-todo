
// our root module for our angular app
var TodoApp = angular.module("TodoApp", []);


// is our first angular controller with it's scope
TodoApp.controller("TodosCtrl", ["$scope", function ($scope) {
  // set a variable on our $scope
  $scope.todos    = [];
  $scope.newTodo  = {};

  $scope.addTodo  = function () {
    $scope.todos.push($scope.newTodo);
    $scope.newTodo = {};
  };

  $scope.delete = function (index) {
    console.log(this);
    $scope.todos.splice(index, 1);
  }
}]);





