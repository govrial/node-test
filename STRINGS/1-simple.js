const name = 'Marcus Aurelius';

console.log(`name = '${name}'`);

console.log(`typeof name = '${typeof name}'`);
console.log(`name.length = '${name.length}'`);
console.log(`name.charAt(5) = '${name.charAt(5)}'`);
console.log(`name.charCodeAt(5) = '${name.charCodeAt(5)}'`);

const tag = (strings, ...args) => {
    console.dir({ strings, args })
}

const greeting = 'Hello';

const person = {name}

const text = tag`${greeting} ${person}`;
