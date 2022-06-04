from mimetypes import guess_all_extensions
import random

# from ascii_hangman import stages, logo

words = ['sakura', 'kiku', 'botan', 'tsubaki', 'fuji', 'ume']

hints = ['Japanese unofficial national flower which brings spring.', 'one of the national seals and a crest used by the Emperor of Japan and members of the Imperial Family.']

index = random.randint(0, 3)
chosen_word = words[index]


display = []
for x in range(len(chosen_word)):
    display += '_'


pyscript.write('unknown-letters', f"{' '.join(display)}")

pyscript.write('hint', f"Hint: {hints[index]}")

letter_input = Element('letter_input')

def on_click_letter(*args, **kwargs):
    input_value = letter_input.element.value
    for index in range(len(chosen_word)):
        if chosen_word[index] == input_value.lower():
            display[index] = input_value.lower()
    pyscript.write('unknown-letters', f"{' '.join(display)}")
    letter_input.element.value = ""
    
    correct = ''.join(display)
    if correct == chosen_word:
        print('you did it')
        pyscript.write('hint', "")
        pyscript.write('key', "You did it! Click HERE!")


    
    


    
    