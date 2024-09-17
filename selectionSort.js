/**
 *
 * @param {Array<number>} arr
 */
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    swap({ arr, before: minIndex, after: i })
  }
  return arr
}

const arr = [4, 13, 1, 6, 99, 200, 2, 8]
function swap({ arr, before, after }) {
  ;[arr[before], arr[after]] = [arr[after], arr[before]]
}

console.log(selectionSort(arr))
