'use strict';
const Discord = require('discord.js'); // Importa Packote discord.js
const fs = require('fs');

// Token
const token = 'ODA3MjgzNTUxNjgyMjk3ODc2.YB1vZQ.Fte9q10rIBQZuM_wl3gcT2CupfY';
const client = new Discord.Client(); // Cria instância do Client Discord

// Event Listener, executa quando o bot está pronto
// Somente depois disso que o bot começa a receber informações
client.on('ready', () => {
    console.log('Bot iniciado');
    client.user.setActivity(`Fudendo tua mãe`, {type:"PLAYING"});
});

// Event listener, ativa quando recebe uma mensagem, parâmetro message para usar metódos da classe message
client.on('message', message => {

    switch (message.content) {
        case 'Eae bot filho da puta':
            message.react('🖕')
                .then(() => console.log(`reagindo a messagem de ${message.author.username}`));
            message.channel.send('Cala boca seu esquizofrênico')
                .then(() => console.log(`Mandando mensagem para ${message.author.username}`));
            message.author.send('Cala boca ou é ban')
                .then(() => console.log(`Mandando mensagem para o DM de ${message.author.username}`));
            break;
        case '$avatar':
            message.channel.send(message.author.displayAvatarURL())
                .then(() => console.log(`Mandando mensagem para ${message.author.username}`));
            break;
        case '$help':
            const embed = new  Discord.MessageEmbed()
                .setAuthor('Bot Teste 01', client.user.displayAvatarURL())
                .setTitle("Comandos Merdas feito por JolyneKo")
                .setColor("#000000")
                .setThumbnail(client.user.displayAvatarURL())
                .setDescription('Veja alguns dos meus comandos merdas, no caso só são dois comandos')
                .addFields(
                    { name: "$help", value: "Pedir ajuda, mas recomendo você se internar no Hospício" },
                    { name: "$avatar", value: "Avatar merda seu, veja essa merda com tamanho inteiro" }
                )
                .setImage("https://preview.redd.it/bzgc4g2dsmf61.png?width=640&height=825&crop=smart&auto=webp&s=48832fce4b9071e8f86f7696b945b64a9be37ac5")
                .setFooter('JolyneKo - 2021', 'https://cdn.discordapp.com/avatars/720305459679985687/5890e87d313c26349db32122ca6fb43e.webp')
                .setTimestamp();
            message.channel.send(embed)
                .then(() => console.log(`Mandando mensagem para ${message.author.username}`));
    }
});

// Logar o bot usando o Token
client.login(token);
