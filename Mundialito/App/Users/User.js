'use strict';
angular.module('mundialitoApp').factory('User', ['$http','$log', function($http, $log) {
    function User(userData) {
        if (userData) {
            this.setData(userData);
        }
        // Some other initializations related to user
    };

    User.prototype = {
        setData: function(userData) {
            angular.extend(this, userData);
        },
        getUrl: function() {
            return '/users/' + this.Username;
        },
        delete: function() {
            $log.debug('User: Will delete user ' + this.Username)
            return $http.delete("api/users/" + this.Id, { tracker: 'deleteUser' });
        },
        makeAdmin :function() {
            $log.debug('User: Will make user ' + this.Username + ' admin')
            return $http.post("api/users/makeadmin/" + this.Id, { tracker: 'makeAdmin' });
        }
    };
    return User;
}]);
