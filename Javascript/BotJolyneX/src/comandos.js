class Comandos {
    static soma(...nums) {
        return nums.reduce((total, num) => total + num);
    }

    static subtração(...nums) {
        return nums.reduce((total, num) => total - num);
    }

    static multiplicação(...nums) {
        return nums.reduce((total, num) => total * num);
    }

    static divisão(...nums) {
        return nums.reduce((total, num) => total / num);
    }

    static factorial(num) {
        if (num === 1 || num === 0)
            return 1;
        else
            return num * factorial(num - 1); 
    }
}

module.exports = Comandos;
