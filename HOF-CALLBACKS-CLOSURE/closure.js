const store = x => () => x;
const a = store(3);
const b = store(2);
const c = store(1);
const aC = a();
const bC = b();
const cC = c();

console.dir({aC, bC, cC})
