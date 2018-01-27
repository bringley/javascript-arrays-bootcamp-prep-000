var ingredient1 = 'bread'
var ingredient2 = 'mild cheese'
var ingredient3 = 'sharp cheese'
var ingredient4 = 'butter'
var ingredient5 = 'tomato'
var ingredient6 = 'garlic'

//array literals list values within square brackets
var grilledCheeseIngredients = [
  'bread', 
  'mild cheese', 
  'sharp cheese', 
  'butter', 
  'tomato', 
  'garlic'
]

var tomatoSauceIngredients = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
]

//you can also use the array constructor
var evenNumbers = new Array()

//todo
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

//there are methods for mutating arrays
//push() adds item to end of array
//unshift() adds item to start of array
//shift() removes item from start of array

//the spread operator allows for a new array in place rather than mutating the original array
var numbers = [1, 2, 3]
//[0, ...numbers]
//[...numbers, 4]
//you can also mutate the original array if it's a variable
numbers = [0, ...numbers]
numbers = [...numbers, 4]
//you can also add elements at a specific array index - any undefined items will be left as such - this can lead to unexpected behavior
numbers[10] = 10

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
  //array = [element, ...array]
  //return array
}

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element)
  //array = [...array, element]
  //return array
}

function accessElementInArray(array, index) {
  var element = array[index]
  return element
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
    return array.shift()
}

