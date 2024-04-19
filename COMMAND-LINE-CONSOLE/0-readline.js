const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your name: ', (name) => {
    rl.addListener('close', () => console.log('closed'));
    rl.write('Hello ' + name + '\n')
    rl.close();
})
