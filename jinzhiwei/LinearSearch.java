/*
  线性查找法: 就是遍历数组
*/
public class LinearSearch{
  public static void main(String[] args){

    int[] data = {24, 18, 12, 9, 16, 66, 31, 4};
    int res = LinearSearch.search(data,16);
    System.out.println(res);

    int res2 = LinearSearch.search(data,666);
    System.out.println(res2);


    Integer[] dataGen = {24, 18, 12, 9, 16, 66, 31, 4};
    int res3 = LinearSearch.searchGen(dataGen,16);
    System.out.println(res3);

  }

  public static int search(int[] data,int target){

    for(int i = 0;i < data.length;i++){
      // == 判断的是引用相等  
      // equals 指的是值是否相同
      if(data[i].equals(target)){
        return i;
      }
    }
    return -1;

  }
  // 使用泛型，不可以是基本数据类型，只能是类
  public static <E> int searchGen(E[] data,E target){
    
    for(int i = 0;i < data.length;i++){
      if(data[i] == target){
        return i;
      }
    }
    return -1;
  }

}
