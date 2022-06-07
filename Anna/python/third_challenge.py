import random

choice = ['丁', '半']

rand = random.randint(0, 1)
audio = Element('audio')
result = Element('result')


def on_click_cho(*args, **kwargs):  
    result.clear()
    audio.clear()
    if rand == 0:
        audio.write("<audio src='../assets/cho.mp3' type='audio/mp3' autoplay></audio>")
        result.write("<img class='chohanImg' src='../assets/cho.png' alt='cho' style='width: 300px; height:300px' /><p class='p-thirdChallenge'>Congrats!</p><button class='close' onclick='toFinalPage()'>To Time Machine</button>")
    
    elif rand == 1:
        audio.write("<audio src='../assets/han.mp3' type='audio/mp3' autoplay></audio>")
        result.write("<img class='chohanImg' src='../assets/han.png' alt='han' style='width: 300px; height:300px; justify-item: center' /><p class='p-thirdChallenge'>Too bad...</p><button class='close' onclick='playagain()'>Play again</button>")  
      

def on_click_han(*args, **kwargs):
    result.clear()
    audio.clear()
    if rand == 0:
        audio.write("<audio src='../assets/cho.mp3' type='audio/mp3' autoplay></audio>")
        result.write("<img class='chohanImg' src='../assets/cho.png' alt='cho' style='width: 300px; height:300px' /><p class='p-thirdChallenge'>Too bad...</p><button class='close' onclick='playagain()'>Play again</button>")
        
    elif rand == 1:
        audio.write("<audio src='../assets/han.mp3' type='audio/mp3' autoplay></audio>")
        result.write("<img class='chohanImg' src='../assets/han.png' alt='han' style='width: 300px; height:300px; justify-item: center' /><p class='p-thirdChallenge'>Congrats!</p><button class='close' onclick='toFinalPage()'>To Time Machine</button>")  
      