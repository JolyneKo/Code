class Animal:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def who_i_am(self):
        print(f"I am {self.name} and i am {self.age} years old")


class Cat(Animal):
    def meow(self):
        print("Meow")


if __name__ == '__main__':
    lucas = Cat("Lucas", 2)
    lucas.meow()
