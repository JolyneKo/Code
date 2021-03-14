import discord
import re


class Client(discord.Client):
    async def on_ready(self):
        print("Bot iniciado com sucesso")

    async def on_message(self, message):
        if message.author == self.user:
            return

        command, args = message.content.split(' ', 2)

        command = ''.join(re.findall('[^$]', command))
        args = ''.join(args)

        print(command)

        if command == "say":
            await message.channel.send("Eae")


bot = Client()

bot.run('***')
