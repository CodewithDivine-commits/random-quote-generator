const quote=[
    {text: "The best way to get started it to quit talking and begin doing.", author: "walt Disney"},
    {text: "Don't let yesterday take up too much of today.", author: "will Rogers"},
    {text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
    {text: "If you are working on something exciting, it will keep you motivated.", author: "steve jobs" },
    {text: "Success is not in what you have, but who you are.", author: "Bo Bennett"},
    {text: "Hardships often prepare ordinary people for the extraodinary destiny.", author:"C.S. Lewis"},
    {text: "Do what you can with all you have, wherever you are.", author: "Theodore Roosevelt"},
    {text: "Believe you can and your halfway there.", author: "Theodore Roosevelt"},
    {text: "Quality is not an act, it is a habit.", author: "Aristotle"},
];

const quoteEL=document.getElementById("quote");
const authorEL=document.getElementById("author");
const btn=document.getElementById("new-quote");

btn.addEventListener("click",()=>{
    const randomIndex=Math.floor(Math.random() * quote.length);
    quoteEL.textContent=quote[randomIndex].text;
    authorEL.textContent= `-${quote[randomIndex].author}`;
});