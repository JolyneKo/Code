import re

text = "$say #1919191 eae meu nome é"

command, channel, args = text.split(' ', 2)

print(command)
