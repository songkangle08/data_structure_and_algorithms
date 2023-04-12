let list = [3, 44, 38, 5, 47, 36, 26, 70, 27, 2, 46, 4, 19, 50, 48]; // 15个值

function shellSort(list) {
  let arr = [...list];
  let len = arr.length;
  let gap = 0;
  let temp;
  while (gap < len / 3) {
    gap = gap * 3 + 1;
  }
  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    console.log(gap, "gap");
    if (gap > len / 2) continue;
    for (let j = 0; j < gap; j++) {
      for (let i = gap + j; i < len; i += gap) {
        let temp = arr[i];
        let k = i - gap;
        for (; k >= 0 && arr[k] > temp; k -= gap) {
          arr[k + gap] = arr[k];
        }
        arr[k + gap] = temp;
      }
      console.log(JSON.parse(JSON.stringify(arr)));
    }
  }
  return arr;
}

console.log(shellSort(list));
