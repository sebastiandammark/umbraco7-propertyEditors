angular.module("umbraco").controller("SheriffOne.Hitbox", function ($scope,dialogService) {
  $scope.Reset = function(e) {
    e.preventDefault();
    $scope.model.value = [
      {linktext: 'Stuff',media: {id: '1337'}}
    ];
  }

  $scope.AddHitBox = function (e) {
    e.preventDefault();

    $scope.model.value.push({
      linktext: 'Stuff new',
      media: {id: '1337'}
    });
  };

  $scope.PickMedia = function(e, index) {
    e.preventDefault();

    var mediaDialog = dialogService.mediaPicker({
        onlyImages: false,
        callback: function(selection) {
            $scope.model.value[index].media = selection;
        }
    });
  }
});