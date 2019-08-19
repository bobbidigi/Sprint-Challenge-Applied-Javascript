// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let cardsContainer = document.querySelector('.cards-container');


axios.get('https://lambda-times-backend.herokuapp.com/articles')
  // let data = response.data;
  .then(function (response) {
    console.log(response);
    let javaScriptArray = response.data.articles.javascript;
    let bootStrapArray = response.data.articles.bootstrap;
    let jQueryArray = response.data.articles.jquery;
    let nodeArray = response.data.articles.node;
    let technologyArray = response.data.articles.technology;

    javaScriptArray.forEach(element => {
      cardsContainer.appendChild(Card(element));
    });
    bootStrapArray.forEach(element => {
      cardsContainer.appendChild(Card(element));
    });
    jQueryArray.forEach(element => {
      cardsContainer.appendChild(Card(element));
    });
    nodeArray.forEach(element => {
      cardsContainer.appendChild(Card(element));
    });
    technologyArray.forEach(element => {
      cardsContainer.appendChild(Card(element));
    })
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
    console.log("This fires last no matter what happens");
  });

function Card(arr) {
  let card = document.createElement('div');
  card.classList.add('card')

  // headline
  let headline = document.createElement('div')
  headline.classList.add('headline')
  headline.textContent = arr.headline;

  //author
  let author = document.createElement('div');
  author.classList.add('author');
  let imageContainer = document.createElement('div');
  imageContainer.classList.add('img-container');
  
  author.appendChild(imageContainer);
  let image = document.createElement('img')
  image.src = arr.authorPhoto;
  imageContainer.appendChild(image);

  //authors name
  let authorsName = document.createElement('span');
  authorsName.textContent = arr.authorName;
  author.appendChild(authorsName);


  card.appendChild(headline);
  card.appendChild(author);
  

  return card;
}
