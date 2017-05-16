angular.module("quoteBook").controller("mainCtrl", function($scope, service) {

  $scope.quotes = service.getQuotes();

  $scope.deleteMe = function(textToDelete) {
    dataService.removeData(textToDelete);
  }

  $scope.addQuote = function() {
    var newQuote = {
      text: $scope.newQuoteText,
      author: $scope.newQuoteAuthor
    }
    if (service.addData(newQuote)) {
      $scope.newQuoteText = '';
      $scope.newQuoteAuthor = '';
    }
  }

})
