
###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

- #### Answer

#### Answer:(- `A : {}` )

The answer is empty object. There are two variable one is greeting and the other in greetign they are both different. Greetign is not declared but initialized as an empty object



###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

- #### Answer

#### Answer: `C: "12"` 

The answer is `C: "12"`. The fucntion takes two arguments as parameter and returns a sum of a and b. Because the arguments are different types.That why it performs type coercion, converting the number to a string and then concatenating the two strings. So, 1 + "2" becomes "12".



###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

- Answer

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`?

n this code, first created an array of foods containing four food emoji elements. Then, create an object info with a property favoriteFood that is initially assigned the value of the first element of the food array, which is "🍕".

Then, reassign the info.favoriteFood property to "🍝". However, this reassignment only affects the info object and does not change the original food array.


###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

- #### Answer

#### Answer:B: `Hi there, undefined` ?

The answer is B: `Hi there, undefined` because the function is expecting a argument for the name parameter. So because function called without any argument the parameter won't get any value.



###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

#### Answer


#### Answer: C: 3 ?

<i>So there is a variable declared as count that has a value of 0.Then there is an array. After that there is a forEach method that is iterating through the numbs array. And increasing the vale of count by one if the num of the nums array is true. Beacause the 0 is a falsy value. It won't pass the condition and the other value will pass and then after the iteration the value will be 3.</i>

