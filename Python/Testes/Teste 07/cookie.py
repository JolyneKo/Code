from time import sleep


class Cookie:
    def __init__(self, sabor):
        self.sabor = sabor

    def criar(self):
        print(f"Criando Cookie de {self.sabor}")
        sleep(10)
        print(f"Cookie de {self.sabor} pronto!")

    def comer(self):
        print(f"Comendo Cookie de {self.sabor}")
        sleep(5)


if __name__ == '__main__':
    c1 = Cookie("Morango")
    c2 = Cookie("Chocolate")
    c3 = Cookie("Abacaxi")

    c1.criar()
    c2.criar()
    c3.criar()

    c2.comer()
