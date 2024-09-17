/**
 *
 * @param {Array<number>} arr
 */
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp1 = arr[j]
        const temp2 = arr[j + 1]
        arr[j] = temp2
        arr[j + 1] = temp1
      }
      console.log({ i: arr })
    }
  }
  return arr
}
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90, 5]))
