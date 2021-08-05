function narcissistic(value) {
    value = String(value);
    let total = 0;
    for(let i = 0; i < value.length; i++) {
      total += Number(value[i]) ** value.length;
    }
    return String(total) === value;
  }