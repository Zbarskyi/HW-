function pow(x, y) {
  let result = 1;
  if (y > 0) {
    for (let i = 0; i < y; i++) {
      result = result * x;
    }
  } 
  else if (y < 0) {
    for (let i = 0; i < -y; i++) {
      result = result * x;
    }
    result = 1 / result; 
  } 
  else {
    result = 1;
  }
  return result;
}