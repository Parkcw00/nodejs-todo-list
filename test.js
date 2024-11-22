const objArray = [
  { name: 'apple', price: 100 },
  { name: 'banana', price: 200 },
  { name: 'grape', price: 300 },
];

// myFilter 를 구현하여 arr.filter 와 동일한 값이 나오도록 하기.

function myFilter(arr, callback) {
  // myFilter 구현
  const filters = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      filters.push(arr[i]);
    }
  }
  return filters;
}

const aaa = objArray.filter((elel) => elel.price >= 200);

console.log(aaa);

const result1 = myFilter(objArray, function (obj) {
  return obj.price >= 200;
});

console.log(result1);
