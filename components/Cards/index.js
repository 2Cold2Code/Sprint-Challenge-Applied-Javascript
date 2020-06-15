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
const cardsContainer = gretel('.cards-container');

let articleObj = axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((r) => {
    let obj = r;
    let rData = obj.data;
    let articlesArr = rData.articles;

    for (let language in articlesArr) {
      articlesArr = [];
      articlesArr.push(language);
      articlesArr.forEach((language) => {
        let headL = rData.articles;
        headL = headL[language];

        headL.forEach((head) => {
          makeCard(head);
        });
      });
    }
  })
  .catch((e) => console.log(e));

const makeCard = (data) => {
  const card = elem("div", "card", null, cardsContainer);

  const headLine = elem("div", "headline", data.headline, card);

  const author = elem("div", "author", null, card);

  const imgContainer = elem("div", "img-container", null, author);

  const img = imgElem("author photo", data.authorPhoto, imgContainer);

  const authorNameText = `By ${data.authorName}`;

  const span = elem("span", "author-name", authorNameText, author);

  return card;
};

const script = noel("script");
script.src = "/components/Carousel/Carousel.js";
const head = gretel("head");
head.appendChild(script);
