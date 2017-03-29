function loopyLighthouse(range, multiples, words){

  var num = range[0];

  while (num <= range[1]){
    if (num % multiples[0] === 0 && num % multiples[1] === 0) {
      console.log(words[0] + words[1])
    }
    else if (num % multiples[0] === 0) {
      console.log(words[0]);
    }
    else if (num % multiples[1] === 0) {
      console.log(words[1]);
    }
    else {
      console.log(num);
    }
    num++;
  }

}