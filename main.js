// ask for user input
// check if palindrome
  // use loop method to check if first index item is equal to last and so forth
// print result for user

var makeArr = []
var userString = document.getElementsByTagName('input').value

function addString (userString) {
  makeArr.push(userString)
}

function checker() {
  makeArr.split('').forEach(function(letter) {
    if (letter.first == letter.last)
      makeArr.pop && makeArr.shift
      else
      return
        document.getElementsByTagName("p").innerHTML = 'This is not a palindrome'
})
}