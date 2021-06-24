// Function to Get Words Information (including Invalid Input)
function getWordsInfo() {
    let txt="";
    // Get the values of the input fields
    let firstWord = document.getElementById("firstword").value;
    let secondWord = document.getElementById("secondword").value;
    // Check if the words are valid
    if (firstWord.length === 0 || secondWord.length === 0 || (firstWord.length > 0 && secondWord.length >0 && firstWord.toLowerCase() == secondWord.toLowerCase())) {
        txt += `Invalid Input <br>`;
        if (firstWord.length === 0) {
            txt += `The first word cannot be blank <br>`;
        }
        if (secondWord.length === 0) {
            txt += `The second word cannot be blank <br>`;
        }
        if (firstWord.length > 0 && secondWord.length > 0 && firstWord.toLowerCase() == secondWord.toLowerCase()) {
            txt += `The two words cannot be the same <br>`;
        }
    } else {
        // Display Entered Words
        txt += `Your Inputs <br>`;
        txt += `First Word is ${firstWord} <br>`;
        txt += `Second Word is ${secondWord} <br>`;
        // Check if the first word is an anagram of the second word
        if (isAnagram(firstWord,secondWord)) {
            txt += `${firstWord} is an anagram of ${secondWord}`;
        } else {
            txt += `${firstWord} is not an anagram of ${secondWord}`;
        }
    }

    // Display Information in the Browser
    document.getTlementById("wordsinfo").innerHTML = txt;
}

/* 
    Function to check if the first word (word1)
    is an anagram of the second word (word2)
*/
function isAnagram(word1,word2) {
    /* 
        Check if the length of the first word is equal to the length of the second word.  If not, return false
    */
   if  (word1.length != word2.length) {
       return false;
   }

   // Convert word1 and word2 to lower case
   word1 = word1.toLowerCase();
   word2 = word2.toLowerCase();

   /*
        Convert each string to an array, sort in alphabetical order and convert back to a string.  Check if the updated strings are the same.
    */
   return word1.split('').sort().join('') == word2.split('').sort().join();
}