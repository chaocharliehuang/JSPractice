function printTime(HOUR, MINUTE, PERIOD) {
    var message = "It's ";

    if (HOUR === 12 && MINUTE === 0) {
        if (PERIOD === 'AM') {
            return message + 'midnight';
        } else {
            return message + 'noon';
        }
    }

    if (MINUTE === 5) {
        message += "5 after " + HOUR;
    } else if (MINUTE === 15) {
        message += "quarter after " + HOUR;
    } else if (MINUTE === 30) {
        message += "half past " + HOUR;
    } else if (MINUTE < 30) {
        message += "just after " + HOUR;
    } else {
        message += "almost " + (HOUR + 1);
    }

    if (PERIOD === "AM") {
        message += " in the morning";
    } else {
        if (HOUR < 5) {
            message += " in the afternoon";
        } else if (HOUR < 9) {
            message += " in the evening";
        } else {
            message += " at night";
        }
    }
    return message;
}

console.log(printTime(8, 50, 'AM'));
console.log(printTime(7, 15, 'PM'));
console.log(printTime(12, 0, 'PM'));
console.log(printTime(12, 0, 'AM'));
console.log(printTime(7, 7, 'PM'));
console.log(printTime(9, 30, 'PM'));
console.log(printTime(7, 5, 'AM'));
console.log(printTime(3, 23, 'PM'));