num1 = int(input("Número 1: "))
num2 = int(input("Número 2: "))

while True:
    op = input("Qual operação?: ")

    if 'som' in op:
        print(f"Resultado {num1 + num2}")
        break
    elif 'sub' in op:
        print(f"Resultado {num1 - num2}")
        break
    elif 'mult' in op or 'prod' in op:
        print(f"Resultado {num1 * num2}")
        break
    elif 'd' in op:
        print(f"Resultado: {num1 / num2}")
        break
    elif 'po' in op or op == 'exponenciação':
        print(f"Resultado: {num1 ** num2}")
        break
    else:
        print("Operador inválido")
