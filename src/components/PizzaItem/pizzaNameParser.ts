const pizzaNameParser = (str: string): string => {
  const workArray = str.split(" ");
  let finalString = "";
  for (let word of workArray) {
    let firstChar = word.charAt(0);
    let restWord = word.substr(1, word.length - 1);
    let finalWord = firstChar.toUpperCase() + restWord;
    finalString = finalString + " " + finalWord;
  }
  return finalString;
};

export { pizzaNameParser };
