var app = angular.module('mobileApp', []);
app.controller('mobileController', function($scope,$http){
  $scope.mobileData = function(mobile){
    $http({
    	method : 'POST',
    	url : 'postData',
    	data : $scope.mobile
    }).then(function success(response){
      alert('Inserted Successfully');
    }, function error(response){
      alert('Error Occured');
    })
  }

  $scope.getOfficeData = function(mobile){
    $http({
    	method : 'GET',
    	url : 'getofficeData',
    }).then(function success(response){

    }, function error(response){
      alert('Error Occured');
    })
  }

  $scope.return = function(office){
    $http({
    	method : 'POST',
    	url : 'updateData'+$scope._id,
    	data : $scope.office
    }).then(function success(response){
      alert('Inserted Successfully');
    }, function error(response){
      alert('Error Occured');
    })
  }


  $scope.mobileData = function(mobile){
    $http({
    	method : 'GET',
    	url : 'getData',
    }).then(function success(response){
    	
    }, function error(response){
      alert('Error Occured');
    })
  }
});