function merge(left, right) {
  let result = []
  let leftIndex = 0
  let rightIndex = 0

  // Concatenate values into result array in sorted order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }

  // Copy remaining values from left
  while (leftIndex < left.length) {
    result.push(left[leftIndex])
    leftIndex++
  }

  // Copy remaining values from right
  while (rightIndex < right.length) {
    result.push(right[rightIndex])
    rightIndex++
  }

  return result
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array
  }

  const middleIndex = Math.floor(array.length / 2)
  let leftArray = []
  let rightArray = []

  // Create left array
  for (let i = 0; i < middleIndex; i++) {
    leftArray.push(array[i])
  }

  // Create right array
  for (let i = middleIndex; i < array.length; i++) {
    rightArray.push(array[i])
  }

  return merge(mergeSort(leftArray), mergeSort(rightArray))
}

// Example usage:
const array = [34, 7, 23, 32, 5, 62]
const sortedArray = mergeSort(array)
console.log(sortedArray)
