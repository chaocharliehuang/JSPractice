var reward = 0.01;
for (var i = 2; i <= 30; i++) {
    reward *= 2;
}
console.log("Reward after 30 days: $" + reward);

var reward = 0.01;
var day = 2;
while (reward < 10000) {
    reward *= 2;
    day++;
}
console.log("Days to make $10,000: " + day);

var reward = 0.01;
var day = 2;
while (reward < 1000000000) {
    reward *= 2;
    day++;
}
console.log("Days to make $1,000,000,000: " + day);

var reward = 0.01;
var day = 2;
while (reward < Infinity) {
    reward *= 2;
    day++;
}
console.log("Days to make infinite money: " + day);