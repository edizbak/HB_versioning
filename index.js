console.log("start");
function test(x) {
  if (x === 1) {
    x = 0;
  }
  return x;
}
const a = test(1);
const b = test(2);
const c = test(3);
console.log("end", a, b, c);
