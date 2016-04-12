'use strict';
app.config(function($stateProvider) {
  $stateProvider

  .state('customers', {
    url: '/customers',
    controller: 'CustomersCtrl'
  })

  .state('customer', {
    url: '/customers/:id',
    controller: 'CustomerCtrl',
    resolve: {
      customer: function($stateParams, CustomerFactory) {
        return CustomerFactory.fetchById($stateParams.id);
      }
    }
  });
});