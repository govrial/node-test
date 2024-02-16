
const {log: ln, E} = Math;

const log = (base, n) => ln(n) / ln(base);

{
    const lg = log.bind(null, 10); // bind base par = 10
    const ln = log.bind(null, E);
    console.dir({lg10: lg(5) ,ln5: ln(5)})
}
