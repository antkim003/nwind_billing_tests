'use strict';
app.controller('CustomersCtrl', function(CustomerFactory, $scope, $state) {
  CustomerFactory.fetchAll()
    .then(function(customers) {
      $scope.customers = customers;

      if (customers.length === 0) {
        $scope.message = 'There are no customers';  
      }
      
    });


  $scope.insert = function() {
    CustomerFactory.create($scope.newCustomer)
      .then(function(customer) {
          $state.go('customer', {id: customer.id});
      });
  }

  $scope._delete = function(customerObj) {
    CustomerFactory.fetchAll()
      .then(function(customers) {
        return CustomerFactory._delete(customerObj)
      })
  };


});