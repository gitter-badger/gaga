'use strict';

angular.module('mean').controller('GamesController', ['$scope', 'Global',
    function($scope, Global, Games) {
        $scope.global = Global;
        $scope.games = {
            name: 'games'
        };
    }
]);
