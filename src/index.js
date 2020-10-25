module.exports =  function reverseNum(num) {
  let x = Math.pow(10, (num + '').length - 1);
  while (num > 0) return (num % 10) * x + reverseNum(Math.floor(num / 10));
  return 0;
  } 
