const stringLenIsGood = (str, maxLen) => str.length <= maxLen;
stringLenIsGood('1234567890', 5);


const isPalindrom = (string) => {
  const normalStr = string.replaceAll(' ', '').toLowerCase();
  let reversedStr = '';

  for (let i = normalStr.length - 1; i >= 0; i--) {
    reversedStr += normalStr[i];
  }

  return (reversedStr === normalStr);
};
isPalindrom('довод');

const getNumbers = (string) => {
  string = string.toString();
  let numbers = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      numbers += string[i];
    }
  }

  return (parseInt(numbers, 10));
};
getNumbers(1.5);
