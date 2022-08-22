//function divisibleCount(x, y){
//    var j = 0;
//    for(let i = 0; i < x.length; i++){
//        var result = x[i] / y;
//        if(result % 1 === 0){
//            j++;
//        }
//    }
//    console.log(j)
//}
//
//divisibleCount([100, 20, 1, 3, 7], 5)
//
//
//function averageArray(arr){
//    let x = 0;
//    for(let i = 0; i < arr.length; i++){
//    x = arr.reduce((a, b) => a + b, 0);
//    x = x / arr.length;
//    }
//    console.log(x);
//}
//
//averageArray([4, 3, 3, 14])




//function positiveProduct(nums){
//    let x = 0;
//    var arr = [];
//    for(let i = 0; i < nums.length; i++){
//        if(nums[i] > 0){
//            arr.push(nums[i]);
//        }
//    }
//    arr = arr.reduce((a, b) => a * b);
//    return arr;
//}
//
//positiveProduct([-1, 4, 3, -3, 2]);


//function multipleSelect(nums, target) {
//        var arr = [];
//        for(let i = 0; i < nums.length; i++){
//        if(nums[i] % target === 0){
//        arr.push(nums[i]);
//        }
//    }
//    return arr;
//}
//
//multipleSelect([7, 12, 9, 5, 15], 3)

//function funnyPhrases(words) {
//    var arr = [];
//    for(let i = 0; i < words.length; i++){
//        if(words[i].length >= 6 && words[i].slice(-1) === 'y'){
//            arr.push(words[i]);
//        }
//    }
//    return arr;
//}
//
//funnyPhrases(["absolutely", "fly", "sorry", "taxonomy", "eighty", "excellent"]);

//function pickPrimes(n) {
//    let arr = [];
//    for(let i = 1; i < n; i++){
//        if(n % i == 0 && prime(i)){
//            arr.push(i)
//        }
//    }
//    console.log(arr)
//}
//
//function prime(num){
//    if(num < 2) return false;
//    for(let i = 2; i < num; i++){
//        if(num % i === 0){
//            console.log(i)
//            return false;
//        }
//    }
//    return true;
//}
//
//pickPrimes(24);
//
//`q \


//function summation(n){
//    let sum = 0;
//    for(let i = 1; i <= n; i++){
//        sum += i;
//    }
//    return sum;
//}
//
//function summationSequence(start, length) {
//    let arr = [start];
//    for(let i = 1; i < length; i++){
//        arr.push(summation(arr[arr.length - 1]));
//    }
//    return arr;
//}
//
//console.log(summationSequence(5, 3))

//function fibonacci(length) {
//    let arr = [1, 1];
//    if(length === 0){
//        return [];
//    }else if (length === 1){
//        return [1]
//    }
//    while(arr.length < length){
//        let last = arr[arr.length - 1];
    //        let secondToLast = arr[arr.length - 2];
    //        let sum = last + secondToLast;
    //        arr.push(sum);
    //    }
    //    return arr;
    //}
    //console.log(fibonacci(6))

//function myFunc(array){
//    let x = 0;
//    let y = 0;
//    for(let i = 0; i < array.length; i++){
//        array[i] === 'n' ? x++ : x--;
//        array[i] === 'w' ? y++ : y--;
//    }
//    x === y ? console.log('Robot is back') : console.log('Robot is gone');
//}
//
//myFunc('nenessw')

//function myFunc(array){
//    let arr = [];
//    let minNum = Math.min(...array); //1
//    let maxNum = Math.max(...array); // 7
//    for(let i = minNum; i < maxNum; i++){
//        //indexOf - will ALWAYS return -1 if element is not exist in array
//        if(array.indexOf(i) === -1){
//            arr.push(i);
//        }
//    }
//    return arr;
//}
//
//console.log(myFunc([1, 3, 5, 7]))

//function myfunc(array){
//    let arr = [];
//    for(let i = 0; i < array.length - 1; i++){
//        arr.push(array[i] + array[i + 1]);                ADJUSTED SUM!!!!!!
//    }
//    return arr;
//}
//
//console.log(myfunc([3, 7, 2, 11]))

//function anagrams(word1, word2) {
//    if(word1.length !== word2.length) return false;
//    let count = {};
//    for(let i = 0; i < word1.length; i++){
//        count[word1[i]] ? count[word1[i]]++ : count[word1[i]] = 1;
//        console.log(count);
//    }
//    for(let i = 0; i < word2.length; i++){
//        count[word2[i]] ? count[word2[i]]-- : count[word2[i]] = 1;
//        console.log(count);
//    }
//
//    for(let i in count){
//        if(count[i] !== 0){
//            return false
//        }
//    }
//    return true;
//}
//
//console.log(anagrams("cat", "act")); 

//function sameCharCollapse(str) {
//    let reducible = true;
//    while(reducible){
//        let char = str.split('')
//        reducible = false;
//
//        for(let i = 0; i < char.length - 1; i++){
//            if(char[i] == char[i + 1]){
//                char[i] = '';
//                char[i + 1] = '';
//                reducible = true;
//            }
//        }
//        str = char.join('')
//    }
//    return str;
//}
//
//console.log(sameCharCollapse('zzzxaaxy'))






//function myFunc(string){
//    let vowels = 'aeiou';
//    let newStr = '';
//    for(let i = 0; i < string.length; i++){
//        let currentChar = string[i];
//        if(vowels.includes(currentChar)){
//            let newChar = currentChar + 'b' + currentChar;        ///ABA TRANSLATE
//            newStr += newChar;
//        }else{
//            newStr += currentChar;
//        }
//    }
//    return newStr;
//}
//
//console.log(myFunc('Cats and dogs'))



//function myFunc(array){
//    let newArr = [];
//    for(let i = 0; i < array.length - 1; i++){
//        newArr.push(array[i] + array[i + 1]);             ////ADJECENT SUM
//    }
//    return newArr;
//}
//
//console.log(myFunc([2, 5, 1, 9, 2, 4]));


//function pyramidSum(base) {
//    let pyramid = [base];
//
//    while(pyramid.length < base.length){
//        let prevLevel = pyramid[0];
//        let nextLevel = adjacentSum(prevLevel);
//        pyramid.unshift(nextLevel)
//    }
//    return pyramid;
//}                                                            PYRAMID SUM
//
//function adjacentSum(arr){
//    let newArr = [];
//    for(let i = 0; i < arr.length; i++){
//        if(i !== arr.length - 1){
//            newArr.push(arr[i] + arr[i + 1]);
//        }
//    }
//    return newArr;
//}
//	
//console.log(pyramidSum([1, 4, 6])); // [[15], [5, 10], [1, 4, 6]]



//function myFunc(array, num){
//    let sum = 0;
//  for(let i = 0; i < array.length; i++){
//    for(let j = 0; j < array.length; j++){
//      if(i !== j){
//        sum = array[i] * array[j];
//          if(sum === num){
//              return true;
//          }
//      }
//    }
//  }
//  return false;
//}
//
////                  i
////                     j
//console.log(myFunc([4, 3, 5, 8], 16))









console.log('sdas')
var btn = document.getElementById('btn');
btn.addEventListener('click', function(e){
    e.preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var body = 'name: ' + name + '<br /> email: ' + email + '<br /> subject ' + 
    subject + '<br /> message' + message;
    Email.send({
        Host : "smpt.elasticemail.com",
        Username : "polyakovmaxim05@gmail.com",
        Password : "72D03E12D4B139D1C8FAC5680898BF07D889",
        To : 'polyakovmaxim05@gmail.com',
        From : email,
        Subject : subject,
        Body : body
    }).then(
      message => alert(message)
    );
})