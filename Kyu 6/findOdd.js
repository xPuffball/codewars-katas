function findOdd(A) {
    let uniqueElements = new Set(A)
    for (let num of uniqueElements) {
      let curCount = 0;
      for (let ele of A) {
        if (num === ele) {
          curCount+=1;
        }
      }
      if (curCount % 2 !== 0) {
        return num;
      }
    }
}