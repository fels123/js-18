// // const hobbies = ["sports", "cooking"]; // this is an array
// // hobbies.push("reading"); // adds item to an array at the bottom
// // hobbies.unshift("coding"); //(slow) add item to first in an array
// // hobbies.pop(); //remove last item
// // hobbies.shift(); // (slow)shift all elements in array one place to the left
// // console.log(hobbies);

// // hobbies[1] = "coding";
// // // hobbies[5] = "reading"; // rarely used
// // console.log(hobbies);

// // //Splice() method
// // // hobbies.splice(indexwhere it should start, delete/shift(0) , replace ); //only available on real arrays
// // hobbies.splice(1, 0, "good food"); // add item anywhere in an array
// // console.log(hobbies);

// // const removedArray = hobbies.splice(-3, 1);
// // console.log(hobbies);

// const testResults = [1, 2, 4, 1.4, 1.7, 1.4, 9];
// // const storedResult = testResults.slice(); // copies the array and stores it
// // const storedResult = testResults.slice(0, 2);
// const storedResult = testResults.concat([7, 0]); //adds the items to the existing array while creating itself a new copy array

// testResults.push(8); // stores only in testResults array
// // storedArray.push(5);

// // console.log(storedArray); // this result will not affect testResults

// console.log(storedResult, testResults);
// // console.log(testResults.indexOf(1.4));
// // console.log(testResults.lastIndexOf(1.4));

// // const personData = [{ name: "Max" }, { name: "Manuel" }];
// // console.log(personData.indexof({ name: "Manuel" }));

// // const manuel = personData.find((person, idx, persons) => {
// //   return (person.name = "manuel");
// // });
// // manuel.name = "anna";
// // console.log(manuel), personData;

// console.log(testResults.includes(-1.4));
//
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

// for (const price of prices) {
//     //   taxAdjustedPrices.push(price * (1 + tax));
//     // }

prices.forEach((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  taxAdjustedPrices.push(priceObj);
});

console.log(taxAdjustedPrices);
