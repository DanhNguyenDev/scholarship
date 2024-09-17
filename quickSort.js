function partition(array, low, high) {
  let pivot = array[high]
  let i = low - 1

  for (let j = low; j < high; j++) {
    if (array[j] <= pivot) {
      i++
      ;[array[i], array[j]] = [array[j], array[i]]
      console.log({ array, i, j })
    }
  }

  ;[array[i + 1], array[high]] = [array[high], array[i + 1]]
  return i + 1
}

function quicksort(array, low = 0, high = array.length - 1) {
  if (low < high) {
    let pivotIndex = partition(array, low, high)
    quicksort(array, low, pivotIndex - 1)
    quicksort(array, pivotIndex + 1, high)
  }
}

let myArray = [3, 1, 0, 2]
// quicksort(myArray)
console.log(partition(myArray, 0, myArray.length - 1))
// console.log(partition(myArray, 0, 3))
// console.log(partition(myArray, 4, myArray.length - 1))
