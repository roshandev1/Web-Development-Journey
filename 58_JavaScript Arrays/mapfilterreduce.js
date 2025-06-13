let arr =[1,3,59,23,11,45];

let newArr=[];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(element*2);
}
console.log(newArr) //new array will be formed with values of old array multiplied by 2.

//Above method is lengthy, lets try the same-thing with map() function.

let newArr2= arr.map((e) =>{
    //we can also take index, array, values inside map().
    return e*2;
})
console.log(newArr2);

//filter()

const greater_than_10=(e)=>{

    if (e>10){
        return true;
    }

    return false;
}
console.log(arr.filter(greater_than_10)); //returns new array which has values greater than 10.

//reduce method

let arr2=[1,2,3,4,5,6];
//function to calculate sum of all values of array.
const add = (a,b)=>{
    return a+b;
}

let sum = arr2.reduce(add);
console.log(sum);   

//Array from function

let arr3= Array.from("Roshan"); //Creates array of anything.
console.log(arr3);