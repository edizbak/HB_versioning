console.log("start");
function test2(x) {
  if (x === 3) {
    x = 0;
  }
  return x;
}
const a = test2(5);
const b = test2(6);
const c = test2(3);
console.log("end", a, b, c);
