/**
 * Created by semianchuk on 08.10.16.
 */
angular.module('angularApp')
    .factory('gitHubFactory', ['gitHubervice','$q', function (gitHubervice, $q) {
        
        function getData(page) {
            var deferred = $q.defer();
            gitHubervice.getData(page).then(function (response) {
                deferred.resolve(response);
            });
            return deferred.promise;

        }
        function getParentData(id) {
            var deferred = $q.defer();
            gitHubervice.getParentData(id).then(function (response) {
                deferred.resolve(response);
            });
            return deferred.promise;

        }
        function getUserData(name) {
            var deferred = $q.defer();
            gitHubervice.getUserData(name).then(function (response) {
                deferred.resolve(response);
            });
            return deferred.promise;

        }

        return {
            getData: getData,
            getParentData: getParentData,
            getUserData: getUserData
        };
    }]);