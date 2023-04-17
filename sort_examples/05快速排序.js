/*
  快速排序的思路可以分解成以下几个步骤：
    ①首先，我们需要选择一个基准元素，通常选择第一个或最后一个元素作为基准元素。
    ②然后，我们定义两个指针 i 和 j，分别指向数组的左右两端。
    ③接下来，我们从右侧开始，向左移动 j 指针，直到找到一个小于或等于基准元素的值。
    ④然后，我们从左侧开始，向右移动 i 指针，直到找到一个大于或等于基准元素的值。
    ⑤如果 i 指针小于或等于 j 指针，交换 i 和 j 指针所指向的元素。
    ⑥重复步骤 3-5，直到 i 指针大于 j 指针，这时，我们将基准元素与 j 指针所指向的元素交换位置，将基准元素放到中间位置。
    ⑦接着，我们将数组分为两部分，左侧部分包含小于或等于基准元素的元素，右侧部分包含大于基准元素的元素。
    ⑧然后，对左右两部分分别进行递归调用快速排序，直到左右两部分只剩下一个元素。
    ⑨最终，整个数组就变得有序了。
*/

const list = [20, 2, 12, 7, 9, 15, 1, 6, 8];

/*
  第一次：i = 0 j = 8;
    pivot = 8;
    
    while  i > j ？ 
      第一次 while
        从左往右走，
          i < j && 20<=8? false  
          arr[8] = arr[0]  // [, 2, 12, 7, 9, 15, 1, 6, 20];
        从右往左右 
          i < j && 20 >=8 ? j--  // j=7
          i < j && 6 >=8 ?       // false
          arr[0] = arr[7]  // [6, 2, 12, 7, 9, 15, 1, , 20];
        跳槽while

      第二次：i = 1 j = 7;  
        从左往右走
          i < j && 2 <= 8 ? true i++  // i = 2
          i < j && 12 <=8 ? false 
          
          arr[7] = arr[2]   // [6,2, , 7, 9, 15, 1, 12, 20];
         从右往左右 
            i < j && 12 >= 8 ? true j-- // j = 6
            i < j && 1 >= 8 ? false 
              arr[2] = arr[6]  //  [6,2, 1, 7, 9, 15, , 12, 20];
              i++   // i = 3
              
      第三次：i = 3 j = 6;
        从左往右走
          i < j && 7 <= 8 ? true i++ // i = 4
          i < j && 9 <= 8 ? false 
            arr[6] = arr[4]  //     [6,2, 1, 7, , 15,9 , 12, 20];
        从右往左右 
            i < j && 9 >= 8 ? true j-- // j =5
            i < j && 15 >= 8 ? true j-- // j = 4  

        i < j ? false;

      跳出循环      
      arr[j] = pivot;
      [6,2, 1, 7, 8, 15,9 , 12, 20];
      
      
    // [6,2, 1, 7]
    
    pivot = 7;
    
    i = 0 ,j = 3;
    while  i > j ？
      从左往右走，
        i < j && 6 < 7 ? true i++ // i = 1;
        i < j && 2 < 7 ? true i++ // i = 2;
        i < j && 1 < 7 ? true i++ // i = 3;
        
    // [6,2, 1]
    
*/

function quickSortCopy(arr) {
  function sort(left, right) {
    if (left >= right) return;
    const pivot = arr[right];
    console.log(pivot, "pivotpivotpivotpivot");
    let i = left;
    let j = right;

    while (i < j) {
      while (i < j && arr[i] <= pivot) {
        i++;
      }
      console.log(i, "11111");
      if (i < j) {
        arr[j] = arr[i];
        // j--;
      }
      while (i < j && arr[j] >= pivot) {
        j--;
      }
      console.log(j, "11111");
      if (i < j) {
        arr[i] = arr[j];
        i++;
      }
    }
    console.log(i, j);

    arr[j] = pivot;
    console.log(JSON.parse(JSON.stringify(arr)));
    sort(left, j - 1);
    sort(j + 1, right);
  }
  sort(0, arr.length - 1);

  return arr;
}

console.log(quickSortCopy(list));

function quickSort(arr) {
  function sort(left, right) {
    if (left >= right) return;
    // 取出基准数
    const pivot = list[left];

    // 定义两个指针
    let i = left;
    let j = right;

    console.log(i, j, pivot, "pivot");

    // 开始排序
    while (i < j) {
      while (i < j && arr[j] >= pivot) {
        j--;
      }
      console.log(j, arr[j], arr[i], "第一次");

      if (i < j) {
        arr[i] = arr[j];
      }

      while (i < j && arr[i] <= pivot) {
        i++;
      }
      console.log(i, arr[j], arr[i], "第二次");

      if (i < j) {
        arr[j] = arr[i];
        j--;
      }
    }

    // 将基准数存放在最终的位置上
    arr[i] = pivot; // 递归处理基准数左边的数据

    console.log(arr, JSON.parse(JSON.stringify(arr)));

    sort(left, i - 1); // 递归处理基准数右边的数据
    sort(i + 1, right);
  }

  sort(0, arr.length - 1);

  return arr;
}
// console.log(list);
// console.log(quickSort(list));
