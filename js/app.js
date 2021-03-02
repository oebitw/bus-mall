'use strict';
// Helper function ....................................................

function randomNumber( min, max ) {
  let index2 = Math.floor( Math.random() * ( max - min + 1 ) ) + min;
  for ( let i = 0; i < index.length; i++ ) {
    if ( index2 === index[i] ) {
      index2 = Math.floor( Math.random() * ( max - min + 1 ) ) + min;
    }
  } return ( index2 );

}

// Global Variables...................................................

let leftProductsIndex = 0;
let centeredProductsIndex = 0;
let rightProductsIndex = 0;

let index = [];



const clickCounter = 24;

const allProducts = document.getElementById( 'allProducts' );
const left = document.getElementById( 'left' );
const center = document.getElementById( 'center' );
const right = document.getElementById( 'right' );


let nameArr = [

  'Bag',
  'Banana',
  'Bathroom',
  'Boots',
  'Breakfast',
  'Bubblegum',
  'Chair',
  'Cthulhu',
  'Dog-duck',
  'Dragon',
  'Pen',
  'Pet-sweep',
  'Scissors',
  'Shark',
  'Sweep',
  'Tauntaun',
  'Unicorn',
  'Usb',
  'Water-can',
  'Wine-glass'



];

let pathArr = [
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg'

];





// Products object........................................................................

function Products( name, path ) {

  this.name = name;
  this.path = path;
  this.image = `./img/${path}`;
  this.clicks = 0;
  this.shown = 0;

  Products.all.push( this );



}
Products.all = [];
Products.counter = 0;

for ( let i = 0; i < nameArr.length; i++ ) {
  new Products( nameArr[i], pathArr[i] );
}

// ..........................Render Function..........................................


function renderProducts() {


  let leftIndex = randomNumber( 0, Products.all.length - 1 );
  left.src = Products.all[leftIndex].image;
  left.alt = Products.all[leftIndex].name;
  leftProductsIndex = leftIndex;
  index.push( leftIndex );

  let rightIndex;
  do {
    rightIndex = randomNumber( 0, Products.all.length - 1 );
  } while ( leftIndex === rightIndex );

  right.src = Products.all[rightIndex].image;
  right.alt = Products.all[rightIndex].name;
  rightProductsIndex = rightIndex;
  index.push( rightIndex );

  let centeredIndex;
  do {
    centeredIndex = randomNumber( 0, Products.all.length - 1 );
  } while ( centeredIndex === rightIndex || centeredIndex === leftIndex );

  center.src = Products.all[centeredIndex].image;
  center.alt = Products.all[centeredIndex].name;
  centeredProductsIndex = centeredIndex;
  index.push( centeredIndex );

  Products.all[leftIndex].shown++;
  Products.all[centeredIndex].shown++;
  Products.all[rightIndex].shown++;

  localStorage.setItem( 'Products', JSON.stringify( Products.all ) );

}


// Handel Click and Results ....................................................................

let button = document.getElementById( 'button' );
button.style.visibility = 'hidden';


function handelClick( event ) {
  if ( Products.counter < clickCounter ) {
    const clickedElement = event.target;
    if ( clickedElement.id === 'left' || clickedElement.id === 'center' || clickedElement.id === 'right' ) {
      if ( clickedElement.id === 'left' ) {
        Products.all[leftProductsIndex].clicks++;
      }
      if ( clickedElement.id === 'center' ) {
        Products.all[centeredProductsIndex].clicks++;
      }
      if ( clickedElement.id === 'right' ) {
        Products.all[rightProductsIndex].clicks++;
      }
      Products.counter++;
      renderProducts();

    }

  } else {
    button.style.visibility = 'visible';
  }
}

function results() {

  let nameArray = [];
  let clicksArray = [];
  let shownArray = [];

  for ( let i = 0; i < Products.all.length; i++ ) {
    nameArray.push( Products.all[i].name );
    clicksArray.push( Products.all[i].clicks );
    shownArray.push( Products.all[i].shown );

  }

  console.log( 'this is name', nameArray );
  console.log( 'this is clicks', clicksArray );
  console.log( 'this is shown time', shownArray );

  let ctx = document.getElementById( 'myChart' ).getContext( '2d' );
  let myChart = new Chart( ctx, {
    type: 'bar',
    data: {
      labels: nameArray,
      datasets: [{
        label: '# of Votes',
        data: clicksArray,
        backgroundColor: [

          'rgba(30, 99, 132, 0.2)',
          'rgba(30, 99, 132, 0.2)',
          'rgba(30, 99, 132, 0.2)',
          'rgba(30, 99, 132, 0.2)',
          'rgba(30, 99, 132, 0.2)',
          'rgba(30, 99, 132, 0.2)',
          'rgba(30, 99, 132, 0.2)',
          'rgba(30, 99, 132, 0.2)',
          'rgba(30, 99, 132, 0.2)',
          'rgba(30, 99, 132, 0.2)',
          'rgba(30, 99, 132, 0.2)',
          'rgba(30, 99, 132, 0.2)',
          'rgba(30, 99, 132, 0.2)',
          'rgba(30, 99, 132, 0.2)',
          'rgba(30, 99, 132, 0.2)',
          'rgba(30, 99, 132, 0.2)',
          'rgba(30, 99, 132, 0.2)',
          'rgba(30, 99, 132, 0.2)',
          'rgba(30, 99, 132, 0.2)',
          'rgba(30, 99, 132, 0.2)'




        ],
        borderColor: [
          'rgba(30, 99, 132, 1)',
          'rgba(30, 99, 132, 1)',
          'rgba(30, 99, 132, 1)',
          'rgba(30, 99, 132, 1)',
          'rgba(30, 99, 132, 1)',
          'rgba(30, 99, 132, 1)',
          'rgba(30, 99, 132, 1)',
          'rgba(30, 99, 132, 1)',
          'rgba(30, 99, 132, 1)',
          'rgba(30, 99, 132, 1)',
          'rgba(30, 99, 132, 1)',
          'rgba(30, 99, 132, 1)',
          'rgba(30, 99, 132, 1)',
          'rgba(30, 99, 132, 1)',
          'rgba(30, 99, 132, 1)',
          'rgba(30, 99, 132, 1)',
          'rgba(30, 99, 132, 1)',
          'rgba(30, 99, 132, 1)',
          'rgba(30, 99, 132, 1)',
          'rgba(30, 99, 132, 1)'

        ],
        borderWidth: 1

      },
      {
        label: '# Shown',
        data: shownArray,
        backgroundColor: [

          'rgba(255, 0, 0, 0.2)',
          'rgba(255, 0, 0, 0.2)',
          'rgba(255, 0, 0, 0.2)',
          'rgba(255, 0, 0, 0.2)',
          'rgba(255, 0, 0, 0.2)',
          'rgba(255, 0, 0, 0.2)',
          'rgba(255, 0, 0, 0.2)',
          'rgba(255, 0, 0, 0.2)',
          'rgba(255, 0, 0, 0.2)',
          'rgba(255, 0, 0, 0.2)',
          'rgba(255, 0, 0, 0.2)',
          'rgba(255, 0, 0, 0.2)',
          'rgba(255, 0, 0, 0.2)',
          'rgba(255, 0, 0, 0.2)',
          'rgba(255, 0, 0, 0.2)',
          'rgba(255, 0, 0, 0.2)',
          'rgba(255, 0, 0, 0.2)',
          'rgba(255, 0, 0, 0.2)',
          'rgba(255, 0, 0, 0.2)',
          'rgba(255, 0, 0, 0.2)',


        ],

        borderColor: [
          'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)'


        ],


      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  } );

  const parentElement = document.getElementById( 'results' );
  const ulElement = document.createElement( 'ul' );
  parentElement.appendChild( ulElement );
  for ( let i = 0; i < Products.all.length; i++ ) {
    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `${Products.all[i].name} VOTES: ${Products.all[i].clicks}, VIEWS: ${Products.all[i].shown}  times.`;
  }


}

function getData() {

  const data = localStorage.getItem( 'Products' );
  if ( data ) {

    const objData = JSON.parse( data );
    Products.all = objData;

    renderProducts();

  }
}

getData();

button.addEventListener( 'click', results );

allProducts.addEventListener( 'click', handelClick );

renderProducts();
