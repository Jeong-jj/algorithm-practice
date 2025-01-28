const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

function makeTriangle(n) {
    const star = "*"
    for (i=1; i<=n; i++) {
        console.log(star.repeat(i))
    }
}

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    makeTriangle(Number(input[0]))
});