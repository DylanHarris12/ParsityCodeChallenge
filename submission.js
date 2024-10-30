const findSum = function(array) {
  // your code here - don't forget to return a number!

  let ans = array.reduce(function(sum,num){
    return sum + num;
  }, 0);
  return ans;
};


const findFrequency = function(array) {
  // your code here - don't forget to return an object!
  
  let maxLetter = '';
  let maxCount = 0;

  let minLetter = '';
  let minCount = 1;
  
  let count = array.reduce(function(accumulator, letter){

      if (!(letter in accumulator)){
        accumulator[letter] = 1;
      } else{
        accumulator[letter] ++;
      };


      if (accumulator[letter] > maxCount){
        maxCount = accumulator[letter];
        maxLetter = letter;
      };

      if (accumulator[letter] <= minCount){
        minCount = accumulator[letter];
        minLetter = letter;
      };

      return ({'most':maxLetter, 'least':minLetter});
  },{});

  
  return count;
};

const isPalindrome = function(str) {
  // your code here - don't forget to return a boolean!

  var reverse = str.split('').reverse().join('');



  if (str == reverse){
    return true;
  } else{
    return false;
  };


};

const largestPair = function(array) {
  // your code here - don't forget to return a number!

  let index = 1;

  let ans = array.reduce(function(product,num){

    if (num * array[index] > product && index < array.length){
      product = num * array[index];
    }

    index ++;

    return product

  },0);

  return ans;

};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!

  let strArray = str.split('');

  let firstIndex = 0;
  let secondIndex = 0;


  for (let index = 0; index < strArray.length; index++) {

    if (strArray[index] === '('){
      firstIndex = index;
    }
    if (strArray[index] === ')'){
      secondIndex = index + 1;
  };

};

strArray.splice(firstIndex,(secondIndex - firstIndex));

return strArray.join('');


}

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!

  let scores = {
    'a': 1,'e': 1,'i': 1,'o': 1,'u': 1,'l': 1,'n': 1,'r': 1,'s': 1,'t': 1,'d': 2,'g': 2,'b': 3, 'c': 3,'m': 3,'p': 3,'f': 4,'h': 4,'v': 4,'w': 4,'y': 4,'k': 5,'j': 8,'x': 8,'q': 10, 'z': 10
  };

  let word = str.split('');
  
  let score = word.reduce(function(sum,letter){

    return sum + scores[letter];

  },0);

  return score;

};
