// // // // // // // // // // // // // let user = "shivam";  //substring vs slice
// // // // // // // // // // // // // console.log(user.substring(4,2)); //negative index behaviour(possible in slice)
// // // // // // // // // // // // // console.log(user.slice(4,2)); //swapping index (possible in substrig)



// // // // // // // // // // // // const names = ["ganesh", "shivam", "rahul", "priya", "sneha"];
// // // // // // // // // // // // for(const element of names){
// // // // // // // // // // // //     console.log(element);
// // // // // // // // // // // // }

// // // // // // // // // // // const user = [10, 20, 30, 40, 50];
// // // // // // // // // // // const user1 = [1, 2, 3];
// // // // // // // // // // // console.log(user.concat(user1));

// // // // // // // // // // // const user = [10, 20, 30, 40, 50];
// // // // // // // // // // // const user1 = [1, 2, 3];
// // // // // // // // // // // console.log(...user,...user1);

// // // // // // // // // let user="shivam";
// // // // // // // // // const user1 = [10,2,3,4,5];
// // // // // // // // // console.log(Array.isArray(user));
// // // // // // // // // console.log(Array.isArray(user1));

// // // // // // // // // let num =10;
// // // // // // // // // let num1 =20;
// // // // // // // // // let num2 =30;
// // // // // // // // // console.log(Array.of(num,num1,num2));

// // // // // // // // // const user=[10,20,30,40,50];
// // // // // // // // // console.log(user.slice(1,2));


// // // // // // // // const user=[10,20,30,40,50];
// // // // // // // // console.log(user.splice(1, 2)); 


// // // // // // // //  const user=[10,20,30,40,50];
// // // // // // // //  const newuser=user.slice(0,3);
// // // // // // // //  console.log('before',user);
// // // // // // // //  console.log('newuser',newuser);
// // // // // // // //  console.log('after',user);


// // // // // // // const user=[10,20,30,40,50];
// // // // // // // console.log('before',user);
// // // // // // // const newuser=user.splice(0,3);
// // // // // // // console.log('newuser',newuser);
// // // // // // // console.log('after',user);


// // // // // // const user=[10,20,30,40,50];
// // // // // // for(const value of user ){
// // // // // //     console.log(value);
// // // // // // }

// // // // // const user=[10,20,30,40,50];
// // // // // for (const element in user) {
// // // // // 	console.log(user40);
// // // // // }

// // // // const userId = [10, 20, 30, 40, 50];
// // // // userId.forEach(function add5(val) {
// // // //     console.log(val + 5);
// // // // });


// // // const user = [10,20,30,40,50];
// // // user.forEach((val)=>{
// // //     console.log(val+5);
    
// // // });

// // const addNum = (num1, num2) => {
// //     console.log(num1);
// //     console.log(num2);
// //     console.log(num1 + num2);
    
// // }
// // addNum(13,14);

// const person={
//     userName:"shivam",
//     age:23,
//     greet : function greeting(){
//         console.log(this)
//         return ('hello ${thiss.userName}');
//     }
// }
// console.log(person.greet());


const person = {
    userName: "shivam",
    age: 23,
    greet: function greeting() {
        console.log(this);
        return this.userName;
    }
};
console.log(person.greet());