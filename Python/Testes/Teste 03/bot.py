import discord


class Bot(discord.Client):
    async def on_ready(self):
        print("Tua mãe está pronto pra ser fudida")

    async def on_message(self, message):
        if message.content == '$fuder':
            await message.channel.send("Fudendo a mãe do Sisun...")


client = Bot()

client.run('***')
