// const readline = require("readline");
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     prompt: '> '
// });
//
// rl.prompt();
//
// const commands = {
//     help() {
//         console.log('Commands: ' + Object.keys(commands).join(', '))
//     },
//     hello() {
//         console.log('Hello world!')
//     },
//     exit() {
//         rl.close();
//     },
// }
//
// rl.on('line', line => {
//     line = line.trim();
//     const command = commands[line];
//     if (command) command();
//     else console.log('Unknown command');
//     rl.prompt();
// }).on('close', () => {
//     console.log('Bye');
//     process.exit(0);
// })


// let i;
//
// for (i = 0; i < 3; i++) {
//     const log= () => {
//         console.log(i)
//     }
//     setTimeout(log, 100)
// }
//
// let a = 'asdasdsa'
// let b = a
// b = 'a1211221'
// console.log(a)
// console.log([1,2,3].concat([2,32]))
// console.log([].concat([1], [2]))
//
// console.log('abc' === new String('abc'))
// console.log('abc' == new String('abc'))


const objecty = {
    text: 'Hello',
    init() {
        const btn = 'asd';
        },
}
