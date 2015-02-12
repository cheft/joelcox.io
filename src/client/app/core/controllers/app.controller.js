;(function() {

    'use strict';

    angular
        .module('core')
        .controller('AppController', AppController);

    /* @ngInject */
    function AppController($scope, $storage, TweenMax, Cubic) {

        var container  = angular.element(document.getElementById('container'));
        var section2   = angular.element(document.getElementById('section-2'));

        this.positions = ['软件工程师 & 完美主义者', '不会剽窃的程序员做不了好师傅 '];
        this.birthday  = 'Mar 14, 1990';
        this.address   = '中国, 深圳';
        this.email     = 'me@cheft.cn';
        this.phone     = '13316463314';
        this.name      = {
            full:'陈海峰',
            all:'陈海峰 Cheft',
            first:'陈',
            last:'海峰'
        };

        this.toSection2 = function() {
            container.scrollTo(section2, 0, 1000);
        };
    }

}).call(this);
