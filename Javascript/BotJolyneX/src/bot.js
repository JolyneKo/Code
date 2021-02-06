const Discord = require('discord.js');
const Comandos = require('./comandos.js');
const ytdl = require('ytdl-core');
const { token, prefix } = require('./infos.json');

const client = new Discord.Client();

client.on('ready', () => {
    console.log(
        `Bot iniciado com sucesso
        Nome: ${client.user.tag}
        ID: ${client.user.id}`);
    client.user.setActivity("Nekopara 5", {type: "WATCHING"});
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
                    .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
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
                        {name: '$soma', value: 'soma os números dados'},
                        {name: '$subtração', value: 'subtrai os números dados'},
                        {name: '$multiplicação', value: 'Multiplica os números dados'},
                        {name: '$divisão', value: 'Divide os números dados, exceto zero'},
                        {name: '$factorial', value: 'Tira a factorial de um número'},
                        {name: '$google', value: 'Pesquisa no google'},
                        {name: '$youtube', value: 'Pesquisa no Youtube'},
                        {name: '$pornhub', value: 'Pesquisa no Porhub'},
                        {name: '$dm', value: 'Enviar mensagem na dm de alguém'},
                        {name: '$papeltesoura', value: 'Joga papel tesoura com você'},
                        {name: '$convite', value: 'Link de convite do bot'}
                    )
                    .setImage('https://preview.redd.it/64ssq8f2ghf61.png?width=960&crop=smart&auto=webp&s=ede2c5000ba38c3d0c535ef16bb4023a9caa0635')
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
                try {
                    const [canal, ...mensagem] =  args.filter((text) => text !== '');
                    const canalID = canal.substring(2, canal.length - 1);
                    const userChannel = client.channels.cache.get(canalID);
                    userChannel.send(mensagem.join(' '));
                } catch (error) {
                    const mensagem = message.content.substring(4);
                    message.channel.send(mensagem);
                }
                break;
            case 'soma':
                try {
                    const números = args.join(' ').split(' ')
                        .filter((num) => num !== '' && num !== ',' && num !== '+')
                        .map((num) => parseInt(num));
                    const soma = Comandos.soma(...números);
                    
                    if (isNaN(soma))
                        throw 'Operação inválida';

                    message.channel.send(soma);
                } catch (error) {
                    message.reply('Operação inválida');
                }

                break;
            case 'subtração':
                try {
                    const números = args.join(' ').split(' ')
                        .filter((num) => num !== '' && num !== ',' && num !== '-')
                        .map((num) => parseInt(num));
                    const subtração = Comandos.subtração(...números);
                    
                    if (isNaN(subtração))
                        throw 'Operação inválida';

                    message.channel.send(subtração);
                } catch (error) {
                    message.reply('Operação inválida');
                }

                break;
            case 'multiplicação':
                try {
                    const números = args.join(' ').split(' ')
                        .filter((num) => num !== '' && num !== ',' && num !== '*')
                        .map((num) => parseInt(num));
                    const multiplicação = Comandos.multiplicação(...números);
                    
                    if (isNaN(multiplicação))
                        throw 'Operação inválida';

                    message.channel.send(multiplicação);
                } catch (error) {
                    message.reply('Operação inválida');
                }

                break;
            case 'divisão':
                try {
                    const números = args.join(' ').split(' ')
                        .filter((num) => num !== '' && num !== ',' && num !== '/')
                        .map((num) => parseInt(num));
                    const divisão = Comandos.divisão(...números);
                    
                    if (isNaN(divisão) || divisão === Infinity)
                        throw 'Operação inválida';

                    message.channel.send(divisão); 
                } catch (error) {
                    message.reply('Operação inválida');
                }

                break;
            case 'factorial':
                try {
                    if (args[0].includes('!'))
                        var num = args[0].substring(1);
                    else 
                        var num = args[0];
                    const factorial = Comandos.factorial(num);
                    message.channel.send(factorial);
                } catch (error) {
                    message.reply('Operação inválida');
                }

                break;
            case 'google':
                const googlePesquisa = args.join('+');
                const googleURL = `[${args.join('')}](https://google.com/search?q=${googlePesquisa})`;
                const googleEmbed = new Discord.MessageEmbed()
                    .setColor('#10defe')
                    .setDescription(googleURL);
                message.channel.send(googleEmbed);
                break;
            case 'youtube':
                const ytPesquisa = args.join('+');
                const ytURL = `[${args.join('')}](https://www.youtube.com/results?search_query=${ytPesquisa})`;
                const ytEmbed = new Discord.MessageEmbed()
                    .setColor('#ff0000')
                    .setDescription(ytURL);
                message.channel.send(ytEmbed);
                break;
            case 'pornhub':
                const phPesquisa = args.join('+');
                const phURL = `[${args.join('')}](https://www.pornhub.com/gay/video/search?search=${phPesquisa})`;
                const phEmbed = new Discord.MessageEmbed()
                    .setColor('#ff0000')
                    .setDescription(phURL);
                message.channel.send(phEmbed);
                break;
            case 'convite':
                message.channel.send('https://discord.com/api/oauth2/authorize?client_id=807340480509640734&permissions=8&scope=bot');
                break;

        }
    }
});

client.login(token);
