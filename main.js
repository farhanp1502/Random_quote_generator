let quotetag=document.getElementById("quote");
let authortag=document.getElementById("author");




const url = 'https://quote-garden.onrender.com/api/v3/quotes';
function generate(){
  fetch(url)
  .then(response => response.json())
  .then(data1 => 
    {
  let quotes = data1.data ;
  // console.log(quotes)
  let randomquote = quotes[Math.floor(Math.random() * quotes.length)];

 let author = randomquote.quoteAuthor;
let quote = randomquote.quoteText;


quotetag.innerHTML=`"${quote}"`;
authortag.innerHTML=`- ${author}`;


  })
  .catch((error) => console.log(error));
  
}
generate();
  






  // let quoteTag = document.getElementById("quote");
  //     let authorTag = document.getElementById("author");



  //     // let btnTag = document.getElementById("btn");
  //     let url = "https://quote-garden.onrender.com/api/v3/quotes";
  //     function getQuote() {
  //       fetch(url)
  //         .then((response) => response.json())
  //         .then((result) => {
  //           const quotes = result.data;
  //           const randomquote =
  //             quotes[Math.floor(Math.random() * quotes.length)];
  //           const author = randomquote.quoteAuthor;
  //           const quote = randomquote.quoteText;
  //           quoteTag.innerHTML = quote;
  //           authorTag.innerHTML = author;
  //         })
  //         .catch((error) => console.log(error));
  //     }
  //     getQuote();
      