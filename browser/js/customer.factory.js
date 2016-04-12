'use strict';
app.factory('CustomerFactory', function($http) {
  var customerObj = {};

  customerObj.fetchAll = function() {
    return $http.get('/api/customers')
      .then(function(response) {
        return response.data;
      });
  };

  customerObj.fetchById = function(id) {
    return $http.get('/api/customers/' + id)
      .then(function(response) {
        return response.data;
      });
  };

  customerObj.update = function(id) {
    return $http.put('/api/customers/' + id)  
      .then(function(response) {
        return response.data;
      });
  };

  customerObj.create = function(obj) {
    return $http.post('/api/customers', obj)
      .then(function(response) {
        return response.data;
      });
  };

  customerObj._delete = function(obj) {
    return $http.delete('/api/customers/' + obj.id)
      .then(function(repsonse) {
        return ''
      });
  };

  return customerObj;
});