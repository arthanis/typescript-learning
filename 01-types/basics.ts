// https://www.typescriptlang.org/docs/handbook/basic-types.html
// number, string, boolean
function add(number1: number, number2: number, showResult: boolean, phrase: string = 'Result is: ') {
  const result = number1 + number2;

  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}
const result1 = add(2, 3, false);
const result2 = add(2.8, 3, true, 'The result is: ');


// objects
const object1: { name: string } = { name: 'user' };
const object2 = { name: 'user' as string };
const object3 = { name: <string>'user'};

// arrays
let list0: Array<any>;
let list1: Array<any> = ['a', '2', 3];
let list2: Array<number> = [1, 2, 3, 4];

list2.push(5);

let list3: number[] = [1, 2, 3];
let list4: string[] = ['a', 'b'];

// tuples
let tuple: [string, number];


// enum


// any
