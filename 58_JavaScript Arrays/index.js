let arr = [1,2,4,7,9];
//index:   0,1,2,3,4

console.log(arr); //prints array "arr".

console.log("The length of given array is : ", arr.length);

console.log(arr[3]); //Gives 3rd index value of array i.e 7.

//Array is mutable. Therefore when we make any change in it, the original array changes.(String is non-mutable)
arr[0] = 344; //Changes the value of 0th index i.e 1 is replaced by 344.

console.log(arr, typeof(arr)); //here new array is printed and data-type of array is given as "object"

//SOME ARRAY METHODS:

console.log(arr.toString()); //Prints array as string with comma(,) in between

console.log(arr.join(" & ")); // "&" comes in-between the values

arr.pop(); //removes the last element of the original array (i.e 9) and returns the removed element.
console.log(arr);

arr.push("Roshan"); //Adds "Roshan" as last element in the original array.
console.log(arr);

arr.shift(); //Removes the 1st element from original array and returns it.
console.log(arr);

arr.unshift("Jack"); //Adds "Jack" as 1st element to the original array.
console.log(arr);

delete arr[3]; //Deletes the element (here element from 3rd index is removed). But the place remains empty, therefore the length of array remains same. In other words, Memory is allocated in the array, but there is no value in that memory.
console.log(arr);

let a1= [1,2,3];
let a2=[4,5,6];
let a3=[7,8,9];

let a4 = a1.concat(a2,a3); //adds all the 3 arrays(a1,a2,a3) together as a new single array (old arrays remain same).
console.log(a4);

arr.splice(1,2, 22, 33);// removes 2 elements starting from 1st index, the add 22 and 33 ( 22 & 33 are optional)
console.log(arr);

console.log(arr.slice(2, 4)); //returns new array with sliced elements from index 2 till end 3rd index (4 is not included).