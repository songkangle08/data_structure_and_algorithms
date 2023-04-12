let list = [3, 44, 38, 5, 47, 36, 26, 70, 27, 2, 46, 4, 19, 50, 48]; // 15个值

/*
  冒泡排序：
  每循环一轮，两两比较，如果arr[j] > arr[j+1] 则：交换let key = arr[j + 1]; arr[j+1] = arr[j] arr[j] = key;，直到把最大的值交换到最后
  每一次循环完，由于最大的已经在后面了，就不需要比较了，所以 j< arr.length - 1 -i(-1是因为arr[j+1]就可以到arr的最后一项了);
*/

function bubbleSort(list) {
  let arr = [...list];

  for (let i = 0; i < arr.length - 1; i++) {
    console.log(`第${i}循环`);
    for (let j = 0; j < arr.length - 1 - i; j++) {
      console.log(arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let key = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = key;
      }
    }
  }

  return arr;
}

console.log(bubbleSort(list));

// [3, 44, 38, 5, 47, 36, 26, 70, 27, 2, 46, 4, 19, 50, 48];
// [3, 44, 38, 5, 47, 36, 26, 70, 27, 2, 46, 4, 19, 50, 48];
// [3, 38, 5, 44, 36, 26, 47, 27, 2, 46, 4, 19, 50, 48, 70];
