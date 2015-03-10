angular.module("umbraco").controller("SheriffOne.Hitbox", function ($scope,dialogService) {
    if (typeof $scope.model.value == "string") {
        $scope.model.value = {};
    }

  $scope.PickMedia = function(e) {
    e.preventDefault();

    console.log($scope.model);

    var mediaDialog = dialogService.mediaPicker({
        onlyImages: false,
        callback: function(selection) {
            $scope.model.value.media = selection;
        }
    });
  }
});