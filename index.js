console.log("start");
function test2(x) {
  if (x === 2) {
    x = 0;
  }
  return x;
}
const a = test2(1);
const b = test2(2);
const c = test2(3);
console.log("end", a, b, c);
