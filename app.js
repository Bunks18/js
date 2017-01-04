//

function wisePerson(wiseType, whatToSay) {
  // your code here
  return 'A wise ' + wiseType + ' once said: "'
    + whatToSay + '".';
};


function textNormalizer(text) {
  // your code here
  var lower = text.toLowerCase();
  var stripStart = lower.trimLeft();
  var stripEnd = stripStart.trimRight();
  return stripEnd;
};

function computeArea(width, height) {
  return width * height;
  // your code here
};

function isDivisible(divisee, divisor) {
   return divisee % divisor === 0;
};

function celsToFahr(celsTemp) {
  // your code here
  return (celsTemp * (9/5)) + 32;

}

function fahrToCels(fahrTemp) {
  return ((fahrTemp -32)) * (5/9);
  //[°F] = [°C] ×  9⁄5 + 32
  // your code here
}

console.log((wisePerson("Will", "Y0")));

console.log((textNormalizer("YOOOO   ")));




// function shouter(whatToShout) {
//   var foo = whatToShout;
//   newfoo = foo.toUpperCase();
//   return newfoo + "!!!";
// };

// console.log((shouter("yooo")));
