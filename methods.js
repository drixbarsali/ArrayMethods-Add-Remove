/*
Let's start with Push.
This method add an Item in the and of the array
Suppose that you have an array

*/

let fruits = ["Apple", "Banana", "Avocado"];

/*
    and if we need to add Orange and Peach inside this array of fruits.
    Easy, let's use the push method for this
*/

fruits.push("Orange", "Peach");

/*
when we console the result should look like this
*/
console.log(fruits)

/*
[ 'Apple', 'Banana', 'Avocado', 'Orange', 'Peach' ]
Note that the itens are added on the array's end
*/

/*
    So let's suppose that you want to show only the last item 
    of this array, let's say we added the fruits, now i want to 
    extract the las fruit pushed to the array.
    For this we can easilly achieve with Pop.

    For example
*/
let lastFruitofArray = fruits.pop();
/*
When we console lastFruitofArray the result should be like this
*/
console.log(lastFruitofArray)
// Peach

/*
Another case is if we want to show the first fruit added to this array
for this we are going to use the method Shift

Look for this code
*/
let firstFruitOfArray = fruits.shift();
/*
When we console firstFruitOfArray the result in this case should be like this
*/
console.log(firstFruitOfArray)
// Apple

/* 
Ok we already covered how i can add Items at the end of an array, but suppose
you want to add itens in the beginning of an array.
For this we can use the method Unshift.

Let's add grapes as the first item of our fruits array
*/

fruits.unshift("Grapes");

/* 
let's again console our array to see what happened here.
*/
console.log(fruits)
// [ 'Grapes', 'Banana', 'Avocado', 'Orange' ]

/*
    Very nice, we covered how we can add itens at the end and the start of an array,
    and how to extract the first and Last item from it, but how can we
    remove items from an array?

    The first method we are going to see is Splice.

    Splice can remove an defined item from an array and we can pass how many items
    we want to remove following this index.

    For example, let's still use our fruits array.

    and suppose we want to remove Banana from it
 

    So banana is the index 1 of our array and we want to remove 1 item only 
*/

fruits = ["Apple", "Banana", "Avocado"];
/*

0:Apple
1:Banana
2:Avocado

for that we are going to use Splice Method.

( the first parameter is the index, and the second the number of items after)
*/
//fruits.splice(1,1);

// so if we console that we should have
//console.log(fruits)

//[ 'Grapes', 'Avocado', 'Orange' ]

/*
    EASY!

    If we want to remove Banana and an item after, easy, we only change the second
    parameter

*/
fruits = ["Apple", "Banana", "Avocado"];
fruits.splice(1,2);

// so if we console that we should have
console.log(fruits)

//[ 'Grapes', 'Orange' ]

/*
    Great!
    Let's say that we want to return a new array copying only
    itens definde by parameters?

    like i Want to return only the second and third fruit.
    For this we can use Slice and we pass as parameters
    the start and end.

    for example

*/
fruits = ["Apple", "Banana", "Avocado", "Orange"];
let middleFruits = fruits.slice(1,3);

console.log(middleFruits)
/* 
the result should look like 


[ 'Banana', 'Avocado' ]


Yes Slice there's a trick, you define the first item, but when you define
the end parameter look that splice do not return it, Splice will only return
the first and the second-last item before end

So when you have 1,4
it will return 1,2,3

Right, to end our serie of Add and Remove Methods let's suppose that we have 2 arrays
of fruits, and we want to return an array  merging those 2.

for example we have
*/

let acidFruits = ["Lemon", "Orange"];
let sweetFruits = ["Apple", "Banana"];

/*

So we have 2 bowls(Arrays) of fruits, let's get them togheter and make a great
fruit salad from that


*/

let fruitSalad = acidFruits.concat(sweetFruits)

console.log(fruitSalad)

/*

The result should be something like that
[ 'Lemon', 'Orange', 'Apple', 'Banana' ]


That's very nice, Hope you liked, feel free to Comment, add, or everything you want in 
the comments section... See you soon

*/
