function wguString(stringToTest) {
  const newWordArray = []; // This will hold an array of transformed strings ("Automotive => "A6e")

  const words = stringToTest.split(/[^A-Za-z]/).filter(word => word !== "");

  /* 
  On the above line I am splitting the given string on all non-alphabetical characters.
  I then take the resulting array and filter out the "words" that are really just empty
  strings. I am sure this could be done with Regex but my knowledge is limited in this area.
  */

  /*
  I now will iterate over my list of "words" which are really the dissected chunks
  of alphabetical characters included in the passed in string.
   */

  words.forEach(word => {
    let newWord = "";

    if (word.length > 1) {
      // It was unclear to me how single characters should be handled so if a character was by itself, I left it alone
      let uniqueLetters = ""; // This will store a string of all unique letters found in the "word"

      for (let i = 1; i < word.length - 1; i++) {
        // starting with index 1 and ending before the last indexable character to avoid the first and last characters as instructed
        if (uniqueLetters.indexOf(word.charAt(i)) === -1) {
          /*
          String.indexOf searches a string for the first matching instance of the passed in argument.
          If none is found it returns -1, otherwise it returns the index. I am checking each character
          in the "word" and seeing if it already exists in uniqueLetters, if it does not (indexOf => -1)
          then I am adding it to the string 
          */
          uniqueLetters += word[i];
        }
      }

      newWord = word[0] + uniqueLetters.length + word[word.length - 1];
      /*
      I then take the first and last letters and add the length of my uniqueLetters variable in the
      middle of the string. 
      */
    } else {
      newWord = word;
      /* 
      If the "word" was a single character then it just equals itself. If you wanted "x" to become "x0x"
      I would just change this conditional to return newWord = word + 0 + word
      */
    }
    newWordArray.push(newWord);
  });

  /*
  Now that I have the original string, an array of the original chunks of alphabetical strings (words)
  and an array of the transformed alphabetical strings (newWords) I will replace each "word" within the
  original string with the corresponding newWord, using the index to match up the word and newWord*/

  words.forEach((word, index) => {
    const regex = new RegExp(word, "gi");
    stringToTest = stringToTest.replace(regex, newWordArray[index]);
  });

  console.log(stringToTest);
  return stringToTest;
}

wguString("x");
