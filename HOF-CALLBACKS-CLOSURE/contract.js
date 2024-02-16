const contract = (callback, ...types) => {
    const { name: resultType } = types.pop();

    return (...args) => {
        for (let i = 0; i < args.length; i++) {
            if (typeof args[i] !== types[i].name.toLowerCase()) {
                throw new TypeError(`Arg type ${types[i].name} expected`);
            }
        }

        const result = callback(...args);

        if (!isNaN(result) && typeof result !== resultType.toLowerCase()) {
            throw new TypeError(`Result type ${resultType} expected`)
        }
        return result;
    };
}
const add = (a, b) => a + b
const addTwo = contract(add, Number, Number, Number);

addTwo(1, NaN)
