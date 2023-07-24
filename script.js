// ==============  question 1================
// const reverseFunc=(str)=>{
//     let arr=str.split('').reverse()
//     console.log(arr);

// }
// console.log(reverseFunc('reversefunction'));

// =============== questions 2================

// const powerOf=(n)=>{
//     let num;
//     while(true){
//         num=n/3
//         if(n===0){
//             return false;
//         }
//        else if(num%3!==0){
//          return false;
//         }else{
//             return true
//         }

//     }
  
// }
// console.log(powerOf(0));
// console.log(powerOf(-1));
// console.log(powerOf(27));

// ================ question 3=================

// const lastTwice=(arr)=>{
//    arr.sort()
//    for(let i=0;i<arr.length;i++){
//     if(arr[i]===arr[i+1])return true;
//     else return false;
//    }
// }

// console.log(lastTwice([1,2,3,1]));
// console.log(lastTwice([1,2,3,4]));
// console.log(lastTwice([1,1,1,3,3,4,3,2,4,2]));

// =================questions 4================

// const digitFunc=(arr)=>{
//    let newArr=arr.join('')
//     newArr=parseFloat(newArr)+1;
//    return newArr.toString().split('')
// }

// console.log(digitFunc([1,2,3]));
// console.log(digitFunc([4,3,2,1]));
// console.log(digitFunc([9]));

// ================= questions 5===================

// const intersectionFunc=(num1,num2)=>{
//     let arr=[]
//      num1.forEach(el => {
//          for(let i=0;i<num2.length;i++){
//             if(el==num2[i]) {
//                 arr.push(num2[i]);
//                  break
//             }
//          }
//      });
//      return arr
// }

// console.log(intersectionFunc([1,2,2,1],[2,2]));
// console.log(intersectionFunc([4,9,5],[9,4,9,8,4]));

// ========================question 6===================

// const prefixFunc=(prefix)=>{

//     let arr=[]

//     for(let i=0;i<prefix[0].length;i++){
//             if(prefix[0][i]===prefix[1][i] && prefix[0][i]===prefix[2][i]){
//                arr.push(prefix[0][i])
//            }
//     }
//    if(arr.length<1){
//     return '""'
//    }else{

//        return arr.join('')
//    }
// }

// console.log(prefixFunc(['flowfler','ftflow','fflighflt']));

// console.log(prefixFunc(['dog','racecar','car']));

// ===========================question 7=========================

// const excelSheet = (str) => {
//   let arr = [];
//   const alphabet = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ];

//   if (alphabet.includes(str)) {
//     arr.push(alphabet.indexOf(str) + 1);
//   } else {
//     let newArr = str.split("");
//     arr.push(
//       (alphabet.indexOf(newArr[0]) + 1) * 26 + alphabet.indexOf(newArr[1]) + 1
//     );
//   }
//   return arr;
// };

// console.log(excelSheet("ZA"));


// ==========questions 8==========================

// const romanFun=(str)=>{
//    let num=0;
//     let arr={
//         'I':1,
//         'V':5,
//         'X':10,
//         'L':50,
//         'C':100,
//         'D':500,
//         'W':1000,
//     }
   
//   for(let i=0;i<str.length;i++){
//     let oneNumber=arr[str[i]];
//     let twoNumber=arr[str[i+1]];
//     console.log(arr[str[i]]);
//     if(twoNumber>oneNumber){
//         num+=twoNumber-oneNumber;
//         i++
//     }else{
//         num+=oneNumber;
//     }
//   }
// return num
// }

// console.log(romanFun('VLII'));