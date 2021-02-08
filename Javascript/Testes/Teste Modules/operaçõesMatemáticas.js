const soma = (...nums) => {
    return nums.reduce((total, num) => total + num);
}

const sub = (...nums) => {
    return nums.reduce((total, num) => total - num);
}

const mult = (...nums) => {
    return nums.reduce((total, num) => total * num);
}

const div = (...nums) => {
    return nums.reduce((total, num) => total / num);
}

module.exports.soma = soma;
module.exports.sub = sub;
module.exports.mult = mult;
module.exports.div = div;

