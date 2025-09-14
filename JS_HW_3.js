 function pow(x, y) {
let result = 1;
for (let i = 0; i < y; i++) {
    result = result * x;
     }
     if (y < 0) {
        result = 1 / result;
         }
     return result;
     }
