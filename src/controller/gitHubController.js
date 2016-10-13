/**
 * Created by semianchuk on 08.10.16.
 */
angular.module('angularApp')
    .controller('gitHubController', [ '$scope', 'gitHubFactory', function ($scope, gitHubFactory) {

        $scope.repository = [];
        $scope.page = 0
        // func for get repository from API
        $scope.getData = function(page){
            gitHubFactory.getData(page).then(function (res) {
                var arr = res.data;
                angular.forEach(arr, function(val, key) {
                    $scope.repository.push({
                        id: val.id,
                        name: val.name,
                        description: val.description,
                        html_url: val.html_url,
                        fork: val.fork,
                        full_name: val.full_name,
                    })
                });
            })
        }
        // func for infinity scroll
        $scope.getParentData = function (name) {
            gitHubFactory.getParentData(name).then(function (result) {
                angular.forEach($scope.repository, function(val, index) {
                    if(val.full_name == name){
                        $scope.repository[index].parent = result.data.parent;
                        console.log($scope.repository[index])
                    }
                });
            })
        }
        // func for infinity scroll
        $scope.load = {};
        $scope.load.busy = false;
        $scope.load.loadMore = function(){
            console.log(this.busy)
            if (this.busy) return;
            this.busy = true;
            if ($scope.page < $scope.repository.length) {
                $scope.page += 100;
                this.busy = false;
            }else if ($scope.repository.length >= 0 && $scope.page >= $scope.repository.length){
                $scope.getData($scope.page)
                this.busy = false;
            }else{
                this.busy = false;
            }
        }

    }]);