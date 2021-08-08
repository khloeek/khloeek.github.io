const quotes = [

    {
    
    quote: "I never dreamed about success, I worked for it",
    
    author: "Estee Lauder"
    
    },
    
    {
    
    quote: "Do not try be original, just try to be good",
    
    author: "Paul Rand"
    
    },
    
    {
    
    quote: "Do not be afraid to give up the good to go for the great",
    
    author: "John D. Rockefeller"
    
    },
    
    {
    
    quote: "It is kind of fun to do the impossible",
    
    author: "Walt Disney"
    
    },
    
    {
    
    quote: "Tough times never last, but tough people do",
    
    author: "Robert H. Schuller"
    
    },
    
    {
    
    quote: "Grind Hard, Shine Hard",
    
    author: "Dwayne Johnson"
    
    },
    
    {
    
    quote: "You cannot change what you are, only what you do",
    
    author: "Philip Pullman"
    
    },
    
    {
    
    quote: "Only I can change my life. No one can do it for me",
    
    author: "Carol Burnett"
    
    },
    
    {
    
    quote: "You’re braver than you believe, and stronger than you seem, and smarter than you think",
    
    author: "A.A Milne"
    
    },
    
    {
    
    quote: "To improve is to change; to be perfect is to change often",
    
    author: "Winston Churchill"
    
    }
    
    ]
    
    const quote = document.querySelector("#quote span:first-child");
    
    const author = document.querySelector("#quote span:last-child");
    
    const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    quote.innerText = todaysQuote.quote;
    
    author.innerText = todaysQuote.author;