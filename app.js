(function () {
  var app = angular.module('app', []);

  app.controller('mainCtrl', function ($scope) {
    var vm = this;

    vm.targetName = null;
    vm.totalRevenueFromEmailMarketing = 0;

    // Data
    vm.deliveryRate = 94;
    vm.emailsPerMonth = 108000;
    vm.totalEmailMarketingConversions = 20;
    vm.averageSale = 50;
    vm.grossMargin = 20;
    vm.targetName = 'Bob\'s Watches';

    vm.getConversationRate = function (totalEmailMarketingConversions, emailsPerMonth, multiplier) {
      multiplier = multiplier || 1;
      var conversationRate = (vm.totalEmailMarketingConversions / vm.emailsPerMonth * 100 * multiplier) || 0;

      return conversationRate.toFixed(3)
    }

    $scope.$watchGroup(['vm.averageSale', 'vm.totalEmailMarketingConversions'], function () {
      vm.totalRevenueFromEmailMarketing = vm.totalEmailMarketingConversions * vm.averageSale;
    });
  });
})();