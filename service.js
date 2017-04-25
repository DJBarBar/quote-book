angular.module("quoteBook").service("service", function() {
  var quotes = [{
      text: 'Like an iguana, I\’m going to adapt.',
      author: 'Zach Randolph'
    },
    {
      text: 'I had a problem with my butt from sitting on the bench for so long.',
      author: 'Allen Iverson'
    },
    {
      text: 'All heart, grit grind.',
      author: 'Tony Allen'
    },
    {
      text: 'Hammer, nail, coffin, this baby is over',
      author: 'Pete Pranica'
    },
    {
      text: 'They\’re not gonna rook us.',
      author: 'David Fizdale'
    },
    {
      text: 'Bust his butt, Marc.',
      author: 'Zach Randolph'
    },
    {
      text: 'We\’re coming to a gunfight with spoons',
      author: 'Matt Barnes'
    }
  ];

  this.getQuotes = function() {
    return quotes;
  }
  this.addData = function(newObj) {
    if (newObj.text && newObj.author) {
      quotes.push(newObj);
      return true;
    }
    return false;
  };
  this.removeData = function(textToRemove) {
    for (var i = 0; i < quotes.length; i++) {
      if (quotes[i].text.toLowerCase() === textToRemove.toLowerCase()) {
        quotes.splice(i--, 1);
      }
    }
  };

});
