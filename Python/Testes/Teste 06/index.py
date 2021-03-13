import pyautogui
import time

time.sleep(5)

while True:
    pyautogui.typewrite("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    time.sleep(1)
    pyautogui.press('enter')
