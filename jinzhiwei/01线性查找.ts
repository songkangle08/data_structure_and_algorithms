/*
  线性查找法: 就是遍历数组
*/

function search(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(search([24, 18, 12, 9, 16, 66, 31, 4], 16));
console.log(search([24, 18, 12, 9, 16, 66, 31, 4], 666));

// 使用泛型
function searchE<E>(arr: E[], target: E): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
