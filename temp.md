Passing Functions as Arguments
==============================

Since Functions are first-class objects in JavaScript, you can store them in variables and pass them as arguments to other Functions. This provides a powerful way to compose programs by combining multiple Functions to build complex behaviors from simple pieces.

Functions are lists of statements that can have parameters whose values dictate some aspect of their behavior. Consider a simple Function that adds 1 to a Number:



```javascript
function addOne(number) {
  return number + 1;
}

```

The parameter `number` determines the value that the function returns, by providing the number you want to add 1 to. Most Functions are more complex than this, but the same rule applies: the arguments passed to a Function dictate certain aspects of its behavior.

Abstractions Allow Code to Specialize
-------------------------------------

We often use Functions to extract common functionality from multiple locations into a single location. Consider this code, which logs a variety of messages:



```javascript
function prasadOrder() {
  console.log('I am very hungry and would like a salad.');
}

function sueOrder() {
  console.log('I am sort of hungry and would like a sandwich.');
}

function jaiOrder() {
  console.log('I am not hungry and would like a smoothie.');
}

```

At first glance, you may not see much common behavior that you can extract from these functions. However, each Function must build a String based on two values: how hungry a person is and what they want to order. Let's extract that behavior and refactor the code:



```javascript
function buildOrder(hungerLevel, item) {
  return 'I am ' + hungerLevel + ' hungry and would like a ' + item + '.';
}

function prasadOrder() {
  console.log(buildOrder('very', 'salad'));
}

function sueOrder() {
  console.log(buildOrder('sort of', 'sandwich'));
}

function jaiOrder() {
  console.log(buildOrder('not', 'smoothie'));
}

```

This refactoring separates the code that defines how to build each line of text from the values provided for each person. The responsibilities of each Function are, therefore, much clearer: `buildOrder` creates a complete message using the values passed to it, and the other Functions each log one person's order.

While the above change removed some duplication in the code, *this was not the goal of extracting the `buildOrder` Function*. Instead, it was just the result of organizing the code by its purpose and responsibility.

Passing Functions as Arguments
------------------------------

Thus far, we've only passed data as arguments to Functions: mostly Numbers, Strings, and Objects that contain Numbers and Strings. Since Functions are first-class objects in JavaScript, though, we can also pass them as arguments. This lets us provide behavior that affects the overall behavior of the Function.

Let's look at iterating through an Array to examine this concept further. Here is an Array that contains some Numbers:



```javascript
let count = [1, 2, 3, 4, 5];

```

Now, let's define an `iterate` Function that uses a standard `for` loop to iterate through the elements of an Array and logs each value:



```javascript
function iterate(array) {
  for (let i = 0; i < array.length; i += 1) { // for each element in the Array
    console.log(array[i]);                    // log the element to the console
  }
}

```

If we pass the `count` Array to `iterate`, it should log each element of the Array to the console:



```javascript
iterate(count);

// logs
1
2
3
4
5

```

Suppose this Function is available for us to use anywhere in our project. However, since other code depends on it, we can't just change the Function to do something different. Two aspects of `iterate` are hard-coded; you cannot change them. The only thing you can control is the Array that you pass to the Function:

| Inherent Behavior (we don't control) | Determined by parameters (we can control) |
| --- | --- |
| How to iterate through an Array | Which Array to iterate through |
| What to do with each element |  |

If we use a Function as an argument, though, we can move one of these items from the first list (what we *can't* control when invoking the Function) to the second list (what we *can* control):



```javascript
function iterate(array, callback) {
  for (let i = 0; i < array.length; i += 1) { // for each element in the Array
    callback(array[i]);                       // invoke callback and pass the element
  }
}

```

Now, we can pass a Function to `iterate` to achieve the functionality we had before:



```javascript
iterate(count, function (number) { console.log(number); });

// logs
1
2
3
4
5

```

Finally, we can leverage the fact that Functions are first-class objects, by storing the function in a variable and passing it as an argument, like so:



```javascript
// declares and stores the function in the logger variable
function logger(number) {
  console.log(number);
}

iterate(count, logger);

// logs
1
2
3
4
5

```

With the callback Function argument, we can now control two aspects of `iterate`'s operation. This limits the Function's responsibility to just iterating through the Array:

| Inherent Behavior | Determined by parameters |
| --- | --- |
| How to iterate through an Array | Which Array to iterate through |
|  | What to do with each element |

Behavior as Arguments to Allow Abstractions
-------------------------------------------

Up until now, you've probably worked with Functions that take values or objects as arguments. These arguments represent the data that the Function needs. When you write a Function, you define the arguments as the data that the Function needs, and the Function body contains the logic or behaviors that "dance around" the data to produce the result -- the return value and/or side effects.

When your Function takes an argument that contains a function expression, the argument provides some supplemental behavior for the Function. This supplemental behavior comes from outside the Function itself. It gives you the ability to not only write a Function that solves a **specific problem**, such as "iterate through an array and log the elements", but now you can write an **abstraction**, such as "iterate through an array and do **something**" that the caller defines.

Let's say our program also needs to iterate through Arrays while logging whether each element is even or odd:



```javascript
function oddOrEven(array) {
  for (let i = 0; i < array.length; i += 1) {
    let number = array[i];
    if (number % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  }
}

```

We can rewrite `oddOrEven` to take advantage of the latest version of `iterate`. This lets us avoid the boilerplate code needed to loop through an Array:



```javascript
function oddOrEven(array) {
  iterate(array, function (number) {
    if (number % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  });
}

```

In this way, `oddOrEven` can focus on **what to do with each element in the Array**; it no longer needs to concern itself with how to iterate through an Array.

Instead of using `iterate`, we can use one of the built-in methods provided for all JavaScript Arrays: the `forEach` method. With `forEach`, our `oddOrEven` Function now looks like this:



```javascript
function oddOrEven(array) {
  array.forEach(number => {
    if (number % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  });
}

```

Arrays and Objects provide several similar methods that take Functions as arguments. We'll examine these in more depth in future assignments.