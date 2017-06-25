function printRange(start, end, skip=1) {
    if (arguments.length === 1) {
        for (var i = 0; i < start; i += skip) {
            console.log(i);
        }
    } else {
        for (var i = start; i < end; i += skip) {
            console.log(i);
        }
    }
}
printRange(2, 10, 2);
printRange(-52, -8, 4);
printRange(1, 5);
printRange(20);