let marks = [90, 95, 92];

let total = marks.reduce((a, b) => a + b, 0);


let avg = (total / marks.length).toFixed(2);

console.log(typeof(avg))

if  (avg > 90) {
  console.log("Top Student");
} else {
  console.log("Average Student");
}