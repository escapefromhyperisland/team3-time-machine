from multiprocessing.sharedctypes import Value
import random
import os
from pkgutil import iter_modules
from telnetlib import LOGOUT


# password = 'shinobi'

number_input_field = Element('number-input-field')

def on_click_number(*args, **kwargs):
    input_value = number_input_field.element.value
    if input_value == "1":
        message = f"{input_value} = 壱"
        pyscript.write('number-output', message)
    elif input_value == "2":
        message = f"{input_value} = 弐"
        pyscript.write('number-output', message)
    elif input_value == "3":
        message = f"{input_value} = 参"
        pyscript.write('number-output', message)
    elif input_value == "4":
        message = f"{input_value} = 肆"
        pyscript.write('number-output', message)
    elif input_value == "5":
        message = f"{input_value} = 伍"
        pyscript.write('number-output', message)
    elif input_value == "6":
        message = f"{input_value} = 陸"
        pyscript.write('number-output', message)
    elif input_value == "7":
        message = f"{input_value} = 漆"
        pyscript.write('number-output', message)
    elif input_value == "8":
        message = f"{input_value} = 捌"
        pyscript.write('number-output', message)
    elif input_value == "9":
        message = f"{input_value} = 玖"
        pyscript.write('number-output', message)
        
        

password_input_field = Element('password-input-field')


def on_click_password(*args, **kwargs):
    input_password = password_input_field.element.value
    password = 'Correct code. Password is Shinobi'
    pyscript.write('password-output', password)