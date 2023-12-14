const quotes = [
    {
      quoteContent: "Be yourself; everyone else is already taken.",
      quoteAuthor: "― Oscar Wilde",
    },
    {
      quoteContent: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
      quoteAuthor: "― Marilyn Monroe",
    },
    {
      quoteContent:
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      quoteAuthor: "― Albert Einstein",
    },
    {
      quoteContent: "A room without books is like a body without a soul.",
      quoteAuthor: "― Marcus Tullius Cicero",
    },
    {
      quoteContent:
        "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
      quoteAuthor: "― Bernard M. Baruch",
    },
    {
      quoteContent: "So many books, so little time.",
      quoteAuthor: "― Frank Zappa",
    },
    {
      quoteContent: "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
      quoteAuthor: "― William W. Purkey",
    },
    {
      quoteContent: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
      quoteAuthor: "― Dr. Seuss",
    }
  ];
  

  var prevRandomNum;
  
  function fetchQuote(quoteId, authorId) {
      do {
          var currRandomNum = Math.floor(Math.random() * quotes.length);
      } while (prevRandomNum == currRandomNum);
  

      const quote = quotes[currRandomNum];
  
 
      document.getElementById(quoteId).innerHTML = quote.quoteContent;
      document.getElementById(authorId).innerHTML = quote.quoteAuthor;
  
      prevRandomNum = currRandomNum;
  }

