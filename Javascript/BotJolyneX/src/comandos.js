const ytdl = require('ytdl-core');
const fs = require('fs');

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

    static cadastrarUser(user, userEmail) {
        const obj = {
            usuário: user,
            email: userEmail
        }

        const jsonUser = JSON.stringify(obj);

        fs.writeFile(`./users/${obj.usuário}.json`, jsonUser, error => {
            if (error) throw error;
            console.log('Novo usuário cadastrado');
        });
    }
}

module.exports = Comandos;
