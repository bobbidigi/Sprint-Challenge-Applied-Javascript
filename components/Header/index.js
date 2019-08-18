// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
  let headerComponent = document.createElement('div');
  headerComponent.classList.add('header');

  // date
  let date = document.createElement('span');
  date.classList.add('date');
  date.textContent = "MARCH 28, 2019";

  // title
  let title = document.createElement('h1');
  title.textContent = "Lambda Times";

  // temp
  let temp = document.createElement('span');
  temp.textContent = '98°';


  headerComponent.appendChild(date);
  headerComponent.appendChild(title);
  headerComponent.appendChild(temp);
  return headerComponent;
}

let headerContainer = document.querySelector('.header-container');

headerContainer.appendChild(Header());
