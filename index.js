let N = 50;
let result1 = "";
let result2 = "";
let result3 = "";

for (let i = 1; i <= N; i++) {
  if (i <= 15) {
    if (i % 5 === 0) {
      result1 += "Backend";
    } else if (i % 3 === 0) {
      result1 += "Frontend";
    } else {
      result1 += i;
    }

    if (i != 15) {
      result1 += ",";
    }
  } else if (i > 15 && i <= 30) {
    if (i % 5 === 0) {
      result2 += "Backend";
    } else if (i % 3 === 0) {
      result2 += "Frontend";
    } else {
      result2 += i;
    }
    if (i != 30) {
      result2 += ",";
    }
  } else if (i > 29 && i <= 50) {
    if (i % 5 === 0) {
      result3 += "Backend";
    } else if (i % 3 === 0) {
      result3 += "Frontend";
    } else {
      result3 += i;
    }
    if (i != 50) {
      result3 += ",";
    }
  }
}
console.log(result1);
console.log(result2);
console.log(result3);
