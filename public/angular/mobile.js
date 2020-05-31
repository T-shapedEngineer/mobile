var app = angular.module('mobileApp', []);
app.controller('mobileController', function($scope,$http){
  $scope.officeData = function(mobile){
    $http({
    	method : 'POST',
    	url : 'postData',
    	data : $scope.mobile
    }).then(function success(response){
      alert('Inserted Successfully');
      //$scope.offices.push(response.data)
      $scope.mobile = {}
    }, function error(response){
      alert('Error Occured');
    })
  }
});
app.controller('officeController', function($scope,$http){
  $scope.getmobileData = function(mobile){
    $http({
    	method : 'GET',
    	url : 'getofficeData',
    }).then(function success(response){
      $scope.offices = response.data
    }, function error(response){
      alert('Error Occured');
    })
  }
  $scope.return = function(office){
    $http({
    	method : 'PUT',
    	url : '/updateData/'+office._id,
    	data : office
    }).then(function success(response){
      alert('Updated Successfully');
    }, function error(response){
      alert('Error Occured');
    })
  }
});
app.controller('returnmobileController', function($scope,$http){
  $scope.returnmobileData = function(mobile){
    $http({
    	method : 'GET',
    	url : '/getreturnData',
    }).then(function success(response){
    	$scope.returns = response.data
    }, function error(response){
      alert('Error Occured');
    })
  }
});