# Anagrams

According to Wikipedia, an **anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.  For example, the word mile can be rearranged into lime, also the word car into arc and the word team into mate.  The purpose of the project is to investigate if the first word is an anagram of the second word using form inputs.

## UX

As a user, I expect the placeholder to be included in every text input.

As a user, when I hover over the input field, I expect a screentip showing what I need to do.

As a user, if I do not enter the first word or second word or both words, I expect an error message. For example:

`Invalid Input
The first word cannot be blank`

As a user, if I enter the something in the first word field and I enter something in the second word field equal to what the first word is, regardless of case (e.g. First word Bus, Second word bus), I expect an error message.

`Invalid Input
The two words cannot be the same`

As a user, if my inputs are valid I expect to see something like:

`Your inputs
First word is car
Second word is arc
car is an anagram of arc`

As a user, if I submit the words mile and lime, I expect mile to be an anagram of lime and vice versa.

As a user, if I submit the words Ash and has, I expect Ash to be an anagram of has and vice versa.

As a user, if I submit words of unequal length (e.g. torch has length of 5 and par has length of 3), I expect that the first word is not an anagram of the second word.

