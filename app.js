// function disemvowel(str){
//     let array = str.split('')
//     const vowels = [ 'A', 'E', 'I', 'O','U', 'a','e','i','o','u']
//     for(let i = 0; i < array.length; i++){
//         for (let v = 0; v < vowels.length; v++) {
//            if(array[i] === vowels[v]){
//                 array.splice(i, 1,'')
//            }

//         }
//     }
//     return str = array.join('')

// }

// console.log(disemvowel('qwertyuiop'));

// function isIsogram(str){
//     str = str.toLowerCase()

//     for (let i = 0; i < str.length; ++i) {
//       for (let v = i + 1; v< str.length; ++v){
//         if(str[i] ===  str[v]){
//             return '('
//         }
//       }

//     }
//     return ')'
//   }

//   console.log(isIsogram('qwq'));

// function brightest(colors){
//   let colorIndex = 0,
//       maxValue = 0
//   for (let i = 0; i < colors.lenght; i++) {
//     let color = colors[i],
//         r = ParseInt(color.slise(1,3), 16),
//         g = ParseInt(color.slise(3,5), 16),
//         b = ParseInt(color.slise(5,7), 16),
//         value = Math.max(r,g,b)
//     if (value > maxValue) {
//       maxValue = value
//       colorIndex = i
//     }
//   }
//   return colors [colorIndex]
// }

// function explode(s) {
//   return s.split('').map(d=>{
//     let y = '';
//     for(let i = 0; i < +d; i++){
//      y += d
//     }
//     return y
//   }).join('')
// }

// function getParticipants(handshakes){
//   let farmers = 0
//   while(handshakes > farmers * (farmers - 1) / 2){
//     farmers++
//   }
//   return farmers
// }

// function duplicateEncode(word){
//   let str = word.toLowerCase()
//   let result = ''
//   for (let i = 0; i < str.length; i++) {
//       if (str.lastIndexOf(str[i]) === str.indexOf(str[i])){
//           result += '('
//       }else{
//           result += ')'
//       }
//   }

//   return result
// }

// console.log(duplicateEncode('wqertyuiow'));
// var name = 'Jhon'
// function printName(){
//   console.log(name);
//   var name = 'Peter'
//   // console.log(name);

// }
// printName();

// function foo (a,b){
//   return a * b
// }
// const bar= foo.bind(null,2)
// console.log(bar(2));

// "use strict";
// function getThis (){
//   return this
// }

// console.log(getThis());

// const foo = bar();
// const number = 2;
// function bar(){ return number}

// let f = (a, b) => { a + b }
// console.log(f(2,3));

// function foo() {console.log(this);}
// foo.call(null)

// const details = {
//   name : 'Jhon!'
// }
// function getMeassage (message){
//   return `${message} ${this.name}`
// }
// console.log(getMeassage.apply(details, ['Hello']));

// for (let i = 0; i < 3; i++){
//   setTimeout(function(){
//     console.log(i);
//   },1000)
// }

// let name = 'Jhon'
// function printName(){
//   let name = 'Peter'
//   console.log(name);
// }
// printName()

// setTimeout(()=>{
//   let name = 'Peter';
//   printName()
// },1000)

// "use strict";

// const details ={
//   message :'Hello'
// }

// function getMeassage(){
//   return this.message
// }

// console.log(getMeassage.call(details));

// var name= 'Jhon';

// var user = {
//   name : 'Peter',
//   printMessage(){
//     console.log(`Hello, ${this.name}!`);

//   }
// }

// var printMessage = user.printMessage
// printMessage();

// function explode(s) {
//   let mes = +s
//   console.log(mes);

//   // let result = []
//   // result.push(mes.map(el => {
//   //   if(el === 0){
//   //   return ''
//   // }else{
//   //     return el
//   // }
//   // }))

// return result.join('.');
// }
// console.log(explode('1234'));

// var maximumWealth = function(accounts) {
//     const account = accounts.map(el => el.reduce((acc, el) => acc + el))
//     return Math.max.apply(null, account)
// };

// console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]))

// var fizzBuzz = function(n) {
//     let result = []
//     for (let i = 1; i <= n; i++){
//         result.push(i)
//     }
//     const arr =  result.map(el =>{
//           if(el % 3 === 0 && el % 5 === 0){
//             return 'FizzBuzz'
//         }else if(el % 3 === 0){
//             return 'Fizz'
//         }else if (el % 5 === 0) {
//             return 'Buzz'
//         }else {
//             return el.toString()
//         }
//     })
//     return arr

// };

// console.log(fizzBuzz(15))

// var numberOfSteps = function(num) {
//   let ans = 0
//     for (; num; ans++)
//         if (num % 2) num--
//         else num /= 2
//     return ans
// };

// console.log(numberOfSteps(14));

// var canConstruct = function(ransomNote, magazine) {

// };

// console.log(canConstruct('aa', 'aab'));

// function bmi(weight, height) {
//   const result = weight / height**2
//   if(result <= 18.5 ){
//     return 'Underweight'
//   }else if (result <= 25.0){
//     return 'Normal'
//   }else if(result <= 30.0 ){
//     return 'Overweight'
//   }else if(result > 30){
//     return 'Obese'
//   }
// }

// console.log(bmi(80, 1.80));

// function calculator(a,b,sign){
//     if(sign === '+'){
//       return a + b
//     }else if(sign === '-'){
//       return a - b
//     }else if(sign === '*'){
//       return a * b
//     }else if(sign === '/'){
//       return a / b
//     }else{
//       return 'unknown value'
//     }

// }
// console.log(calculator(1,2,"l"));

// function between(a, b) {
//   let result = []
//   for(let i = a; i <= b; i++){
//     result.push(i)
//   }
//   return result
// }

// console.log(between(1,4));

// function accum(s) {
//   let arr = s.split('')
//   return arr.map((el,idx)=>{
//     for (let i = 0; i < idx + 1; i++) {
//        el[i];

//     }
//   })
// }

// console.log(accum('abcd'));

// var sortedSquares = function(nums) {
//     return nums.map(el => {
//       return el ** 2
//     }).sort((a,b)=>{
//       return a - b
//     })
// };

// console.log(sortedSquares([-4,-1,0,3,10]));

// var getMinimumDifference = function(root) {
//   const a = root.filter(el=> typeof(el) === 'number' )

//   return Math.min.apply(null, a)
// };
// console.log(getMinimumDifference([1,0,48,'ноль','нуль',12,49]));

// function problem(x){
//   if(typeof(x) === 'string'){
//     return 'Error'
//   }else{
//     return x * 50 + 6
//   }
// }
// console.log(problem('kjfn'));

// function makeString(s){
//   const result = s.split(' ')
//   return result.map(el => {
//     return el[0]
//   }).join('')
// }

// console.log(makeString('This Is A Test'));

// function cookie(x){
//   if(typeof(x) === 'string'){
//     return `Who ate the last cookie? It was Zach!`
//   }else if(typeof(x) === 'number'){
//     return `Who ate the last cookie? It was Monica!`
//   }else{
//     return 'Who ate the last cookie? It was the dog!'
//   }
// }

// console.log(cookie(5));

// var strStr = function(haystack, needle) {
//   if (needle.length === 0) return 0;

//   if (needle === haystack) return 0;

//   for (let i = 0; i <= haystack.length - needle.length; i++) {
//     if (needle === haystack.substring(i, i + needle.length)) {
//       return i;
//     }
//   }

//   return -1;
// };

// console.log(strStr('sadbutsad' , 'sad'));

// function XO(str) {
//   let array = str.split('')
//   const o =  array.filter(el => el.toLowerCase() === 'o' )
//   const x =  array.filter(el => el.toLowerCase() === 'x' )

//   return o.length === x.length ? true : false
// }

// console.log(XO('oox'));

// var isPalindrome = function(x) {
//     return x.toString().split('').reverse().join('') === x.toString()

// };

// console.log(isPalindrome(12));

// function findAverage(a) {
//     const arr = a.toString()
// //     const result = 0
// //   for (let i = 0; i < a.length; i++){
// //    result+= a[i]
// //   }
//   return arr
//   }

//   console.log(findAverage(3,4,5,6,7,8,9,8,7,6,5,4,3))

// function isPalindrome(x) {
//     return x.toLowerCase().split('').reverse().join('') === x.toLowerCase()
//   }

//   function convertPalindromes(num) {

//        // Declaring variables
//        let n, k, rev = 0;

//        // storing num in n so that we can compare it later
//        n = num;

//        // while num is not 0 we find its reverse and store
//        // in rev
//        while (num != 0) {
//            k = num % 10;
//            rev = (rev * 10) + k;
//            num = Math.floor(num / 10);
//        }

//        // check if num and its reverse are same
//        if (n == rev) {
//            return 1;
//        }
//        else {
//            return 0;
//        }

//   };

//   console.log(convertPalindromes([101, 2, 85, 33, 14014] ));

// function dominator(A) {
//     const arr = []
//     for (let i=0; i<A.length; i++){
//       if (!arr[A[i]])
//         arr[A[i]] = 1
//       else
//         arr[A[i]]++
//       if (arr[A[i]] > A.length/2)
//         return i
//     }
//     return -1
// }

// console.log(dominator([3, 4, 3, 2, 3, 1, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4]));
