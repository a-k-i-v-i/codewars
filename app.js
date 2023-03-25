


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




  function brightest(colors){
    let colorIndex = 0,
        maxValue = 0
    for (let i = 0; i < colors.lenght; i++) {
      let color = colors[i],
          r = ParseInt(color.slise(1,3), 16),
          g = ParseInt(color.slise(3,5), 16),
          b = ParseInt(color.slise(5,7), 16),
          value = Math.max(r,g,b)
      if (value > maxValue) {
        maxValue = value
        colorIndex = i
      }  
    }
    return colors [colorIndex]
  }


  function explode(s) {
    return s.split('').map(d=>{
      let y = '';
      for(let i = 0; i < +d; i++){
       y += d
      }
      return y
    }).join('')
  }



  function getParticipants(handshakes){
    let farmers = 0
    while(handshakes > farmers * (farmers - 1) / 2){
      farmers++
    }
    return farmers
  }





function duplicateEncode(word){
    let str = word.toLowerCase()
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (str.lastIndexOf(str[i]) === str.indexOf(str[i])){
            result += '('
        }else{
            result += ')'
        }
    }

    return result
}

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




console.log(
  (
    function(a){
      arguments[0] = 10
      return a
    }
  )(5)
);