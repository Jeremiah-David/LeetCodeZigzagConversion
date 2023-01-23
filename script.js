s = "PAYPALISHIRING";
numRows = 4;

var convert = function (s, numRows) {
  let array = [];
  // create an array for each row
  for (let index = 0; index < numRows - 1; index++) {
    array.push([]);
  }

  // loop through s
  for (let i = 0; i < numRows - 1; i++) {
    for (j = 0; j < s.length; j++) {
      array[i].push(s[j]);
    }
    // place each character in s in different array for each row
    // add white space for the zag
    // how much white space?
    // Rows - 2, with 1 less white space
    // starts with all white space to the left - 1 per row
    // starting whitespace is number of rows - 2
    // loop through whitespace length place characters is first index
    // then +1 each row in reverse, with -1 white space from left and
    // + 1 whitespace from right
    // row?
  }

  return array;
};

console.log(convert(s, numRows));
