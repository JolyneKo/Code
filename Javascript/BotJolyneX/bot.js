const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'ODA3MzQwNDgwNTA5NjQwNzM0.YB2kag.3cfNSgInajE-yAIo5BNA0a-QrCU';
const prefix = '$';

client.on('ready', () => {
    console.log(
        `Bot iniciado com sucesso
        Nome: ${client.user.tag}
        ID: ${client.user.id}`);
    client.user.setActivity("Nekopara 5", {type: "PLAYING"});
    client.user.setStatus('idle');
});

client.on('message', message => {
    const avatar = client.user.displayAvatarURL();

    if (message.author.bot) return;
    if (message.content.startsWith(prefix)) {
        const [CMD_NAME, ...args] = message.content
            .trim()
            .substring(prefix.length)
            .split(" ");
        console.log(message.content);
        
        switch (CMD_NAME) {
            case 'help':
                const embed = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle('Comandos')
                    .setAuthor('JolyneX', avatar)
                    .setDescription('Alguns dos comandos que posso fazer')
                    .setThumbnail(avatar)
                    .addFields(
                        {name: '$help', value: 'Mostra todos os comandos'},
                        {name: '$avatar', value: 'Mostra o seu avatar'},
                        {name: '$botAvatar', value: 'mostra o avatar do bot'},
                        {name: '$hora', value: 'Horário Atual'},
                        {name: '$say', value: 'Falar num canal específico'},
                        {name: '$factorial', value: 'Tira a factorial de um número'},
                        {name: '$papagaio', value: 'Papagaio que repete todas as suas palavras'},
                        {name: '$dm', value: 'Enviar mensagem na dm de alguém'},
                        {name: '$papeltesoura', value: 'Joga papel tesoura com você'},
                        {name: '$convite', value: 'Link de convite do bot'},
                    )
                    .setImage('https://tenor.com/view/celebrate-shinkoukei-mashiro-dancing-gif-4909808')
                    .setFooter('Criado por JolyneKo#1178', avatar)
                    .setTimestamp();
                message.channel.send(embed);
                break;
            case 'avatar':
                const avatarEmbed = new Discord.MessageEmbed()
                    .setColor('#009bf4')
                    .setDescription(`[Seu avatar](${message.author.displayAvatarURL()})`)
                    .setImage(message.author.displayAvatarURL());
                message.channel.send(avatarEmbed);
                break;
            case 'botAvatar':
                const botAvatarEmbed = new Discord.MessageEmbed()
                    .setColor('#009bf4')
                    .setDescription(`[bot avatar](${avatar})`)
                    .setImage(avatar);
                message.channel.send(botAvatarEmbed);
                break;
            case 'hora':
                const now = new Date();
                const hours = ('0' + now.getHours()).slice(-2);
                const minutes = ('0' + now.getMinutes()).slice(-2);
                const seconds = ('0' + now.getSeconds()).slice(-2);
                const time = `${hours}:${minutes}:${seconds}`;
                message.channel.send(time);
                break;
            case 'say':
                message.channel.send(args.join());
                break;
        }
    }
});

client.login(token);
