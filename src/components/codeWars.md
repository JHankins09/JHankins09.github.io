# These are a list of solutions to Code-Wars Code challenges.

##### Author: GiacomoSorbi
##### Difficulty: 5
##### Question:
In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.

Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:

josephus_survivor(7,3) => means 7 people in a circle;
one every 3 is eliminated until one remains
```
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out
[1,2,4,5,7] => 6 is counted out
[1,4,5,7] => 2 is counted out
[1,4,5] => 7 is counted out
[1,4] => 5 is counted out
[4] => 1 counted out, 4 is the last element - the survivor!
```

#### Solution (with notes):
```javascript
function josephusSurvivor(n,k){

// Create Group variable to hold an array of all of our people.
  let group = []

  // Populate the array from 1 to our group number.
  for (i = 1; i <= n; i++) {
    group.push(i)
  }

  // Identify the index of the array to be removed. If the index would be larger than the size
  // of the group, using the Modulo (%) operator will ensure the index is represented in
  // our group. Because k is equivelent to the number of people to count starting at 1, and
  // our array starts at index 0, we will need to subtract 1 from k to find the appropriate
  // index to remove.
  let removeIndex = (k - 1) % group.length

  // We can now set a for loop, where i needs to be less than our total group size minus 1.
  // This will ensure we remove all but one number from the group.
  for (i=0; i<n-1; i++) {

    // Each round of the for loop will create a new group excluding our removed index. To
    // create this, simply concatinate two slices of our origional group. One starting with
    // index 0, going up to the removed index (slice excludes your ending index), and the other
    // starting at the removed index + 1 and proceding to the end of the array.
    group = group.slice(0, removeIndex).concat(group.slice(removeIndex+1))

    // we will also need to reset the removeIndex to move ahead another k spaces, less the 1
    // we removed. Lastly, as our group size has changed, modulo (%) the group will allow
    // us to be sure our removed index exists inour array.
    removeIndex = (removeIndex + (k-1)) % group.length
  }

// Lastly, return the only number remaining in our group array.
return group[0]
}
```

#### Solution (without notes):
```javascript
function josephusSurvivor(n,k){
  let group = []
  for (i = 1; i <= n; i++) {
    group.push(i)
  }
  let removeIndex = (k - 1) % group.length
  for (i=0; i<n-1; i++) {
    group = group.slice(0, removeIndex).concat(group.slice(removeIndex+1))
    removeIndex = (removeIndex + (k-1)) % group.length
  }
return group[0]
}
```

##### Author: xDranik
##### Difficulty: 6
##### Question:
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

###### Examples
```"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
```

##### Solution (with notes)

```javascript
function validBraces(braces){
// If there is ever an odd number of braces, we know
// they are not valid. Thus, return false, or continue
if (braces.length % 2 == 1) {return false}

// Create an object to keep track of if our brackets
// are open or closed. I renamed the brackets, as
// objects are much easier to work with when you have
// alphabetic attributes assigned.
  const counter = {
    a: 'closed',
    b: 'closed',
    c: 'closed'
  }

// lastly, create an array of the brackets that have been
// most recently opened. This array will be populated using
// 'shift' and 'unshift' instead of 'push' and 'pop' so that
// toClose[0] will always reference the most recently opened
// bracket.
  let toClose = []

// Now we itterate through the braces one by one to evaluate
// weather they break our pattern. To keep track, each index
// will populate our counter object, as well as our 'toClose'
// array.
  for (i = 0; i < braces.length; i++) {
    if (braces[i] == '(') {
      counter.a = 'open'
      toClose.unshift('a')
      }
      // When evaluating closing brackets, we need to confirm that
      // the corresponding 'toClose' bracket is it's opposite (the
      // opening bracket).
      else if (braces[i] == ')' && toClose[0] == 'a') {
        counter.a = 'closed'
        toClose.shift()
      }
      else if (braces[i] == '{') {
        counter.b = 'open'
        toClose.unshift('b')
      }
      else if (braces[i] == '}' && toClose[0] == 'b') {
        counter.b = 'closed'
        toClose.shift()
      }
      else if (braces[i] == '[') {
        counter.c = 'open'
        toClose.unshift('c')
      }
      else if (braces[i] == ']' && toClose[0] == 'c') {
        counter.c = 'closed'
        toClose.shift()
      } else {
      // if none of the above are true at any point, then
      // we can return false.
      return false
      }
    }

    // If we successfully coplete the for - loop, we simply check that
    // there are no opne counters. If all are closed, return true! Else,
    // return false.
    return counter.a == 'closed' && counter.b == 'closed' && counter.c == 'closed' ?
    true : false
}
```
##### Solution (without notes)

```javascript
function validBraces(braces){
if (braces.length % 2 == 1) {return false}
  const counter = {
    a: 'closed',
    b: 'closed',
    c: 'closed'
  }
  let toClose = []
  for (i = 0; i < braces.length; i++) {
    if (braces[i] == '(') {
      counter.a = 'open'
      toClose.unshift('a')
      }
      else if (braces[i] == ')' && toClose[0] == 'a') {
        counter.a = 'closed'
        toClose.shift()
      }
      else if (braces[i] == '{') {
        counter.b = 'open'
        toClose.unshift('b')
      }
      else if (braces[i] == '}' && toClose[0] == 'b') {
        counter.b = 'closed'
        toClose.shift()
      }
      else if (braces[i] == '[') {
        counter.c = 'open'
        toClose.unshift('c')
      }
      else if (braces[i] == ']' && toClose[0] == 'c') {
        counter.c = 'closed'
        toClose.shift()
      } else {
      return false
      }
    }
    return counter.a == 'closed' && counter.b == 'closed' && counter.c == 'closed' ?
    true : false
}
```


##### Author: xDranik
##### Difficulty: 6
##### Question:
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
```
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
```

##### Solution (with notes):
``` javascript
function toWeirdCase(string){

  // Start by pushing all words in the string to
  // lowercase. This gives a clean starting point
  // for each word.
  string = string.toLowerCase()

  // Next, separate all words into an array of words.
  arr = string.split(' ')

  // This will act as a place holder for our returned
  // solution.
  let newString = ''

  // Using a for loop, access each word within our array
  // individually.
  for (i = 0; i < arr.length; i++) {
    // This will act as a place holder for our returned
    // wierdcase word.
    let result = ''

    // Now, for each letter in the word, we know
    // the index based on 'j'. If 'j' is even
    // than put it back into our result as an uppercase.
    // If 'j' is odd, simply return it to our result.
    for (j = 0; j < arr[i].length; j++) {
      j % 2 == 0 ?
      // Recall the += operator will add a specified
      // value onto the current value of the variable
      result += arr[i][j].toUpperCase() :
      result += arr[i][j]
    }

    // Lastly, as we put our new string back together,
    // this will only include a space if there are
    // multiple words. Otherwise, our first word will
    // never have a space before it.
    i == 0 ?
      newString = result :
      newString += ' ' + result
  }

  // Now, simply return our newString!
  return newString
}
```

##### Solution (without notes):
``` javascript
function toWeirdCase(string){
  string = string.toLowerCase()
  arr = string.split(' ')
  let newString = ''
  for (i = 0; i < arr.length; i++) {
    let result = ''
    for (j = 0; j < arr[i].length; j++) {
      j % 2 == 0 ?
      result += arr[i][j].toUpperCase() :
      result += arr[i][j]
    }
    i == 0 ?
      newString = result :
      newString += ' ' + result
  }
  return newString
}
```
