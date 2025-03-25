const curry = (fn) => ((...args) => {
    if (fn.length > args.length) {
        return curry(fn.bind(null, ...args));
    }
    return fn(...args);
});

const curryMin = fn => (...args) =>
    (fn.length > args.length) ? curryMin(fn.bind(null, ...args)) : fn(...args);

const sum = (a, c, d, f, g) => a+c+d+f+g;
const f = curry(sum)
const res = f(1, 2, 3, 4)(1);
console.log(res)
console.log(res)
