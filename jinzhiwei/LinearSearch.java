/*
   Àà
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


    Student[] student = {new Student("Alice"),new Student("Alice"),new Student("Bobo")};
	System.out.println(student);
    int res5 = LinearSearch.searchGen(student,"Bobo");
    System.out.println(res5);


  }

  public static int search(int[] data,int target){

    for(int i = 0;i < data.length;i++){     
	  if(data[i] == target){
        return i;
      }
    }
    return -1;

  }
  public static <E> int searchGen(E[] data,E target){
    
    for(int i = 0;i < data.length;i++){
      if(data[i].equals(target)){
        return i;
      }
    }
    return -1;
  }

}
