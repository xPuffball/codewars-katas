function getSum(a,b)
{
   if (a === b) {
     return a
   }
  let chainSum = 0;
  if (a > b) {
    while(b !== a + 1) {
      chainSum += b;
      b++;
    }
  } else {
    while(b + 1 !== a) {
      chainSum += a;
      a++;
    }
  }
  return chainSum
}