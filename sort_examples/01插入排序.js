let list = [3, 44, 38, 5, 47, 36, 26, 70, 27, 2, 46, 4, 19, 50, 48]; // 15个值

/*
  插入排序
  每一次循环，拿出当前循环的值key = arr[i]; 建立递减变量j=i-1;
  从j项一直减到0项（j>=0）
  
  如果key < arr[j];就把arr[j+1] = arr[j]，直到key不在小于arr[j]，把arr[j+1] = key; 
  
*/

function insertionSort(list) {
  const arr = [...list];
  for (let i = 1; i < arr.length; i++) {
    console.log(`第${i}次循环`); // 1 2 3
    let key = arr[i]; // 44  38  5
    let j = i - 1; // 0  1  2

    // [3,38,44]
    while (j >= 0 && key < arr[j]) {
      console.log(i, j, key, arr[j]);
      arr[j + 1] = arr[j];
      // 第1次循环
      // 1 0 44 3  // [3,44]

      // 第2次循环
      // 2 1 38 44 // [3, , 44]
      // 2 0 38 3  // [3, , 44]

      // 第3次循环
      // 3 2  5 44    // [3,38, ,44]
      // 3 1  5 38    // [3, ,38,44]
      // 3 0  5 3     // [3, ,38,44]

      // 第4次循环
      // 4 3 47 44    // false 直接忽略

      j--;
    }
    // 这里j+1是因为在最后一次，while条件已经不符合，j在前一位
    arr[j + 1] = key;
    // [3,44,38,5,47]
    // [3,38,44,5,47]
    // [2,5,38,44,47]
  }

  return arr;
}

console.log(insertionSort(list));
