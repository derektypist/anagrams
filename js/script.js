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