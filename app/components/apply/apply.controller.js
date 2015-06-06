rentapply.controller('ApplyCtrl', ['$scope', '$state', '$stateParams', '$location', '$http', '$timeout', '$firebaseArray',
  function ($scope, $state, $stateParams, $location, $http, $timeout, $firebaseArray) {

    var appsRef = new Firebase("https://openhousing.firebaseio.com/applications");

    $scope.current = {};
    $scope.application = {};
    $scope.issues = null;

    $scope.sendApplication = function() {
      $scope.current = appsRef.push($scope.application, function () {
        console.log('New application sent');
        $location.path('/apply/confirm');
      });
    };

    $scope.clearApplication = function(){
      $scope.application = {};
    };

}]);