const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

function findShortestWord(danishWords) {
    return danishWords.reduce( function(shortest, e) {
      return (typeof e == 'string') && (shortest=='' || e.length < shortest.length) ? e : shortest;
    }, '');
  };
  
  console.log(findShortestWord(danishWords)); // returns 'ø'