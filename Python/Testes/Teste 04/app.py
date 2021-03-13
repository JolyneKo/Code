from tkinter import *
from tkinter import messagebox

window = Tk()

window.title("Piroca")

window.geometry('300x50')


def openNewWindow():
    messagebox.show("Fudendo mãe do Sisun", "Fudendo mãe do sisun")


btn = Button(window, text="Fuder mãe do Sisun", bd=5, command=openNewWindow)

btn.pack(side='top', pady=10)

window.mainloop()
