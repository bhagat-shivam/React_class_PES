// console.log("hello")
// console.log(alert("hi"))
// document.write("this is my world")

// " VAR IS A GLOBAL SCOPE VARIABLE ""
// var a = 30;
// if(a==30)
// {
//     var a = 40;
//     console.log(a); //40
// }
// console.log(a) //40


// " LET IS A LOCAL SCOPE VARIABLE "
// let a = 30;
// if(a==30)
// {
//     let a = 40;
//     console.log(a); //40
// }
// console.log(a) //30


// for(var i=0; i<5; i++)
// {
//     console.log(i); // 0,1,2,3,4
// }
// console.log(i) // 5


// function hi(msg="helNo")
// {
//     console.log(msg);
// }
// hi()
// hi("hello");


// spread variable (capable for holding multiple variables)
// function funk(a,f,...aka)
// {
//     console.log(aka);
// }
// funk(1,2,3,4,'a','f','g');


// let a = 10;
// let b = 5;
// let c = 10;
// if(a!=b)
// {
//     if(a==c)
//     {
//         console.log("a and c are equal");
//     }
//     else
//     {
//         console.log("none of them are equal");
//     }
// }
// else{
//     console.log("a and b are equal")
// }


// const arr = [1,2,3]
// const newArr = [...arr,4,5];
// console.log(newArr);


// COMBINE AND ARRAY 
// const num=[1,2,3,4]
// function add(a,b,c,)
// {
//     return a+b+c;
// }
// console.log(add(...num))

//COMBINE MORE THAN ONE ARRAY

// const arr1 = [1,2,3];
// const arr2= [4,5,6];

// const mergeArray = [...arr1,...arr2];

// console.log(mergeArray);