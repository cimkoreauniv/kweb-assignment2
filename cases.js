const factorial = (n) => {
    let ret = 1;
    for (let i = 1; i <= n; i++)
        ret *= i;
    return ret;
}

const permutation = (n, r) => {
    return factorial(n) / factorial(n - r);
};

const combination = (n, r) => {
    return factorial(n) / factorial(n - r) / factorial(r);
};

const multiPermutation = (n, r) => {
    return n ** r;
};

const multiCombination = (n, r) => {
    return combination(n + r - 1, r);
};

module.exports = {
    permutation,
    combination,
    multiCombination,
    multiPermutation,
};