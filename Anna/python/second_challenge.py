from mimetypes import guess_all_extensions
import random

# from ascii_hangman import stages, logo

words = ['sakura', 'kiku', 'botan', 'tsubaki', 'fuji', 'ume']
kanji = ['桜','菊','牡丹', '椿', '藤', '梅']

hints = ['Cherry blossom', 'Chrysanthemum', 'Paeonia suffruticosa', 'Camellia', 'Wisteria floribunda', 'Plum blossom']

index = random.randint(0, 5)
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
        pyscript.write('key', f"<div class='modal-hana'><div class='modal-content'><div style='font-size: 10rem; font-family: 'Yuji Mai', serif;'>{kanji[words.index(chosen_word)]}</div><div>You did it! Click <strong style='color: orange'>HERE!</strong></div></div></div>")


    
    


    
    