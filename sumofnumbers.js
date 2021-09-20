const test = [2, 5, 7, 8];
function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}
console.log(sumFor(test));

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}
console.log(sumWhile(test));

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1));
}
console.log(sumRecursion(test));

function sumTheSimpleWay(list) {
  return _.reduce(list, function (sum, num) {
    return sum + num;
  });
}
console.log(sumTheSimpleWay(test));
