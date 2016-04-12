'use strict';

app.controller('CustomerCtrl', function($scope, $state, CustomerFactory, customer) {
  $scope.customer = customer;

  $scope._delete = function() {
    CustomerFactory._delete($scope.customer)
      .then(function(data) {
        $state.go('customers');
      });
  }

  $scope.update = function() {
    CustomerFactory.update($scope.customer)
      .then(function(data) {
        $scope.customer = data;
      });
  };

});