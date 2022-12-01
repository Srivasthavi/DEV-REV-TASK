
const {readFileSync, promises: fsPromises} = require('fs');
function syncReadFile(quotes) {
  const contents = readFileSync(quotes, 'utf-8');

  const arr = contents.split(/\r?\n/);

  console.log(arr);

  return arr;
}
function newQuote(){
  var randomNumber = Math.floor(Math.random()*(arr.length));
  const arr = syncReadFile('quotes.txt');
  document.getElementById('quotesOfTheDay').innerHTML = arr[randomNumber];
}
