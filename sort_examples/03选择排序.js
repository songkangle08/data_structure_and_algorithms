let list = [3, 44, 38, 5, 47, 36, 26, 70, 27, 2, 46, 4, 19, 50, 48]; // 15个值

/*
  插入排序：
    每次循环找到最小的值，记录下标，跟当前值替换
    由于第i次循环的的arr[i]都已经是最小的了，所以 let j = 1 + i;
*/

function selectSort(list) {
  let arr = [...list];

  for (let i = 0; i < arr.length - 1; i++) {
    console.log(`第${i}循环`);
    let cur = arr[i];
    let min = cur;
    let k = i;
    for (let j = 1 + i; j < arr.length; j++) {
      console.log(i, j, arr[j], min);
      if (arr[j] < min) {
        min = arr[j];
        k = j;
      }
    }
    console.log(min, cur);
    arr[i] = min;
    arr[k] = cur;
  }

  return arr;
}

console.log(selectSort(list));
