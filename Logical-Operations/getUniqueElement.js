const array =
  [
    { "name": "Joe", "age": 17 },
    { "name": "Bob", "age": 17 },
    { "name": "Carl", "age": 35 }
  ]

const key = 'age';

const arrayUniqueByKey = [...new Map(array.map(item =>
  [item[key], item])).values()];

console.log(arrayUniqueByKey);

/*

here you will be able mapping or get uniqe element by setting a unique "key" of every object



*/
