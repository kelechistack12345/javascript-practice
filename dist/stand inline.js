/*function nextinline(arr, item){

    return item
}

var testarr=[1,2,3,4,5];

console.log("before:"+JSON.stringify(testarr))*/


function nextInLine(arr, item) {
    arr.push(item);
    var removed = arr.shift();
    return removed; 
  }

  const testArr = [1, 2, 3, 4, 5];

 // console.log("Before: " + JSON.stringify(testArr));
    console.log(nextInLine(testArr, 6));
 // console.log("After: " + JSON.stringify(testArr));