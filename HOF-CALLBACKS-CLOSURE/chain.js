const chained = (x) => a => b => a + b + x;

console.log(
    chained(1)(2)(3)
)
