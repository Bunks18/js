//

function wisePerson(wiseType, whatToSay) {
  // your code here
  return 'A wise ' + wiseType + ' once said: "'
    + whatToSay + '".';
};

function shouter(whatToShout) {
  var foo = [whatToShout];
  newfoo = foo.toUpperCase();
  return newfoo + "!!!";// your code here
};

function textNormalizer(text) {
  // your code here
  var lower = text.toLowerCase();
  var stripStart = lower.trimLeft();
  var stripEnd = stripStart.trimRight();
  return stripEnd;
};

console.log((wisePerson("Will", "Y0")));

console.log((shouter("yooo")));

console.log((textNormalizer("YOOOO   ")));
