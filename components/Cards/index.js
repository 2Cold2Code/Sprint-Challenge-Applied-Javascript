// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//

//
// Use your function to create a card for each of the articles and add the card to the DOM.

let articleObj = axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((r) => {
    let obj = r;
    let rData = obj.data;
    let articlesArr = rData.articles;

    const cardsContainer = document.querySelector(".cards-container");

    for (let language in articlesArr) {
      articlesArr = [];
      articlesArr.push(language);
      articlesArr.forEach((language) => {
        let headL = rData.articles;
        headL = headL[language];
       
        headL.forEach((head) => {
            
    const card = document.createElement("div");
    card.classList.add("card");
    cardsContainer.appendChild(card);
         
          const headLine = document.createElement("div");
          headLine.classList.add("headline");
          headLine.textContent = head.headline;
          card.appendChild(headLine);

          const author = document.createElement("div");
          author.classList.add("author");
          card.appendChild(author);

          const imgContainer = document.createElement("div");
          imgContainer.classList.add("img-container");
          author.appendChild(imgContainer);

          const img = document.createElement("img");
          img.src = head.authorPhoto;
          imgContainer.appendChild(img);

          const span = document.createElement("span");
          span.textContent = `By ${head.authorName}`;
          author.appendChild(span);
        });
      });
    }
  })
  .catch((e) => console.log(e));
  
  const script = document.createElement('script');
  script.src = '/components/Carousel/Carousel.js';
  const head = document.querySelector('head');
  head.appendChild(script);
  

