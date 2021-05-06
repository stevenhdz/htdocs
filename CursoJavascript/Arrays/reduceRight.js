var numbers = [175, 50, 25];
numbers.reduceRight(myFunc);

function myFunc(total, num) {
  return total - num;
}