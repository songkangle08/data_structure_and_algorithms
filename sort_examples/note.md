# 排序

## 插入排序完整代码

```js
/*
  每一次循环，拿出当前循环的值 key = arr[i]; 建立递减变量 j=i-1;
  从 j 项一直减到 0 项（j>=0）
  如果 key < arr[j];就把 arr[j+1] = arr[j]，直到 key 不在小于 arr[j]，把 arr[j+1] = key;
*/
function insetSort(list) {
  let arr = [...list];
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    // 这里j+1是因为在最后一次，while条件已经不符合，j在前一位
    arr[j + 1] = key;
  }
  return arr;
}
```
