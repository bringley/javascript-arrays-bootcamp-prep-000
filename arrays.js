//list a bunch of variables
var ingredient1 = 'bread'
var ingredient2 = 'mild cheese'
var ingredient3 = 'sharp cheese'
var ingredient4 = 'butter'
var ingredient5 = 'tomato'
var ingredient6 = 'garlic'

//now let's group a list of items into a single variable
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

//you can also use the array constructor - note the use of 'new' in the constructor
var evenNumbers = new Array()

//there are destructive methods for mutating arrays
//push() adds item to end of array
//pop() removes item from end of array
//unshift() adds item to start of array
//shift() removes item from start of array

//there are also non-destructive methods for generating new arrays from existing arrays
//slice() removes n items from the start of an existing array and a negative int argument removes n items from the end
//the spread operator '...array' allows for the user to specify which items to add and whether to add them to the start or the end
var numbers = [1, 2, 3]
//[0, ...numbers]
//[...numbers, 4]

//you can also destructively mutate the original array if it's a variable
numbers = [0, ...numbers]
numbers = [...numbers, 4]
//you can also add elements at a specific array index - any undefined items will be left as such - this can lead to unexpected behavior
numbers[10] = 10

//operating within the middle of the array is trickier
//all splice() arguments are optional
//splice(index, #elemToAdd, #elemToRemove)


//todo
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

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

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop()
}

function removeElementFromEndOfArray(array) {
  var newArray = array.slice(0, array.length - 1)
  return newArray
}
