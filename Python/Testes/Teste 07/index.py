from time import sleep


class Dog:
    def __init__(self, name, idade, sexo):
        self.name = name
        self.idade = idade
        self.sexo = sexo

    def latir(self):
        print("Au Au")

    def dormir(self):
        print(f"{self.name} está dormindo...")


class Carro:
    def __init__(self, marca, cor):
        self.marca = marca
        self.cor = cor
        self.is_started = False

    def start(self):
        print("Ligando o carro...")
        sleep(5)
        print("Carro ligado!")
        self.is_started = True

    def run(self, km):
        if self.is_started:
            print(f"Andando {km} Kilômetros")
            sleep(10)
        else:
            print("Você precisa ligar o carro primeiro!")


if __name__ == '__main__':
    pedro = Dog("Pedro", 2, 'M')
    maria = Dog("Maria", 2, 'F')

    pedro.latir()
    maria.dormir()

    carro1 = Carro("BMW", "Branco")

    carro1.run(10)

    carro1.start()

    carro1.run(10)
