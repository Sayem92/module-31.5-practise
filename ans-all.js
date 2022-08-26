                                    // ALL COMPLETE

// -------------------------Q  1  -----------------------------done
const money = 500;
    // money = 700;
    // console.log(money);    //TypeError: Assignment to constant variable.

let taka = 300;
    taka = 450;
    // console.log(taka);   // 450  
///  let ar variable man changeable but const variable man fixed, no change

// -------------------------Q  2  -----------------------------done
const student = {
    name : 'Mahim',
    roll : 12,
    class : 'Ten',
    school : 'Kamalgong',
    teacher : 15,
};

const multiLine = `Mahim ahmed ar roll ${student.roll}
He read in class : ${student.class}
Per month her coast : ${money} `
// console.log(multiLine);
                                                        // Mahim ahmed ar roll 12
                                                        // He read in class : Ten
                                                        // Per month her coast : 500

// -------------------------Q  3.1  ----------------------------done
const divide = number => number / 5 ;
// console.log(divide(43)) ;    // 8.6

// -------------------------Q  3.2  ----------------------------done
const calculate = (x,y) => {
    const sum1 = x + 2;
    const sum2 = y + 2;
    const multiply = sum1 * sum2;
    return multiply;
};
// console.log(calculate(8,18));     //  200

// -------------------------Q  3.3  ----------------------------done
const multiply3Digit = (a, b, c) => a * b * c;
// console.log(multiply3Digit(10,2,3));     //  60

// -------------------------Q  3.4  ----------------------------done i think same q 3.3 and 3.4
const multiCalculate = (a,b) => {
    const r1 = a + 2;
    const r2 = b + 2;
    const sum = r1 * r2;
    return sum
};
// console.log(multiCalculate(5,7));     // 63

// -------------------------Q  4  ----------------------------google search dew
    // This article discusses the major differences between the regular functions and the arrow functions.

    // Arrow functions – a new feature introduced in ES6 – enable writing concise functions in JavaScript. While both regular and arrow functions work in a similar manner, yet there are certain interesting differences between them, as discussed below.

    let square = function(x){
        return (x*x);
      };
    //   console.log(square(9));          regular function---------// 81

      const square2 = (x) => {
        return (x*x);
    };
    // console.log(square2(9));            arrow function----------// 81
// -------------------------Q  4.5  ----------------------------done
//javaScript ar let var const ar modde defference 
// let : let ar value changing possible 
// const : const ar value changing possible na error dibe
// var : var ar value changing because var hosting the below value to up.

// -------------------------Q  5  ----------------------------done
const numberArray = [1, 2, 5, 8, 9, 11, 16, 17];
const multiplyArray = numberArray.map(x => x * 5)
//  console.log(multiplyArray);        //[5, 10, 25, 40, 45, 55, 80, 85]

// -------------------------Q  6  ----------------------------done
const allArray = [1, 2, 5, 8, 9, 11, 16, 17];
const oddNumber = allArray.filter(num => num % 2 !== 0);
// console.log(oddNumber);    // [ 1, 5, 9, 11, 17 ]

// -------------------------Q  7  ----------------------------no
const products =  [
    {name : 'Watch', color : 'Black', price : 10000},
    {name : 'Mobile', color : 'White', price : 18000},
    {name : 'Book', color : 'Yellow', price : 180},
    {name : 'Fan', color : 'Sky', price : 5000},
 ];
const product = products.find(pri => pri.price == 5000);
//  console.log(product);         // { name: 'Fan', color: 'Sky', price: 5000 }

// -------------------------Q  7.5  ----------------------------
// array modde map, forEach, filter, find ar kaj ------
//1. map: array modde map a sob element check kore condition a ja porbo sob dibo result akta array  modde . 

//2. forEach: array modde forEach a sob element check kore condition a ja porbo sob dibo result akta number akare.--------------number not array. 

//3. filter: array modde filter a sob element check kore condition a ja porbo sob dibo result akta array modde .

//4. find: array modde find a sob element check kore condition a ja porbo , condition je potom ta milbo oita dibo result akta just number a .

// -------------------------Q  8  ----------------------------done
//destructuring use
const obj =  {name : 'Table', color : 'Golden', price : 5100};
const {color} = obj 
// console.log(color);   // Golden


// -------------------------Q  9  ----------------------------done
const allNumbers = [58, 85 , 99, 960, 44, 45]
 const [a, b, three] = allNumbers;
//  console.log(three);       //   99

// -------------------------Q  10  ----------------------------done
function number3all( x, y, z = 7){
    return x+y+z ;
};
//  console.log(number3all(10,20));  // 37

const number3 = ( x, y, z = 7) => x+y+z ;
// console.log(number3(100,200));    // 307


// -------------------------Q  11  ----------------------------done

const nested = {
    player : 20,
    school : {
        count : 100, 
        address: 'Kamalgong',
        people : {
            girl : 30,
            boy : 25,
            teacher : {
                women : 3,
                man : 2,
            }
        }
    },
    tubeWell : 77 ,
    field : 3,
};

// -------------------------Q  12  ----------------------------done 

// console.log(nested.school.people.teacher.man);    // 2 sotik

// console.log(nested.school.people.teache.man);  
//  error kaba             //TypeError: Cannot read properties of undefined (reading 'man');

//  console.log(nested.school.people.teache?.man);  
// error kaba na but    ///   undefined