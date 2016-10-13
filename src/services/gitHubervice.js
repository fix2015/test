/**
 * Created by semianchuk on 08.10.16.
 */
angular.module('angularApp')
    .service('gitHubervice', ['$http', 'domain','$q' ,function ($http, domain, $q) {

        var url = domain.gitHub;
        
        this.getData = function(page) {
            var link = url + '/repositories?since=' + page;
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: link
            }).then(function successCallback(response) {
                deferred.resolve(response);
                console.log(response)
            }, function errorCallback(response) {
                console.error(response)
                deferred.reject(response);
            });
            return deferred.promise;
        };
        this.getUserData = function(name) {
            var link = url + '/repos/' + name ;
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: link
            }).then(function successCallback(response) {
                deferred.resolve(response);
                console.log(response)
            }, function errorCallback(response) {
                console.error(response)
                deferred.reject(response);
            });
            return deferred.promise;
        };
        
        this.getParentData = function(id) {
            var link = url + '/repos/' + id;
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: link
            }).then(function successCallback(response) {
                deferred.resolve(response);
                console.log(response)
            }, function errorCallback(response) {
                console.error(response)
                deferred.reject(response);
            });
            return deferred.promise;
        };

    }]);