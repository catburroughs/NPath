import time
import sys
import board
import busio
import pygame
import os
import json
import Adafruit_MPR121.MPR121 as MPR121
import random
#pygame.init()
#pygame.mixer.pre_init(44100, 16, 2, 4096)
NPath_Sounds = '/home/pi/NPath/Back_End/NPath_Sounds/'
Creator_Sounds = '/home/pi/NPath/Creator_Sounds/'
Nature_Sounds = '/home/pi/NPath/Back_End/Nature_Sounds/'


mode_dict = {1:NPath_Sounds,2:Nature_Sounds,3:Creator_Sounds}

# Create MPR121 instance.
cap = MPR121.MPR121()
cap.begin()
cap.set_thresholds(6, 4)
pygame.mixer.init() #turn all of pygame on.
# Initialize communication with MPR121 using default I2C bus of device, and

if not cap.begin():
   print('Error initializing MPR121.  Check your wiring!')
   sys.exit(1)   
    
def get_soundfile(mode):
    return mode_dict[mode]

def touchpad_randomizer():
    tplist = list(range(12))
    random.shuffle(tplist)
    return tplist
           

def default_touchpad(mode, mode_dict):
    tplist = touchpad_randomizer()
    print("tplist is ", tplist)
    default_dict = {}
    for x in tplist:
        for soundfile in os.listdir(mode_dict[mode]):
            path = mode_dict[mode] + str(soundfile)
            print("sound path is ", path)
            default_dict[x] =  pygame.mixer.Sound(path) 
    return default_dict



def creator_touchpad(mode, mode_dict, sounddict):
    final_dict = {}
    for soundfile in os.listdir(mode_dict[mode]):
        for k,v in sounddict.items():
            if soundfile == v and (soundfile.endswith('.wav')or soundfile.endswith('.mp3')):
                v = pygame.mixer.Sound(str(mode_dict[mode]) + str(soundfile))
                final_dict.update([int(k),v])
                
    return final_dict

def touchhand():
    return random.randint(1,12)

def boardplayer(soundict, numbertouched):
    print(soundict)
    for x in range(numbertouched):
        tp = touchhand()
        print("tp is " ,tp)
        if tp in soundict:
            print("tp in soundict")
            soundict[tp].play()
            print("Input {} touched!".format(tp))
        

print('Adafruit MPR121 Capacitive Touch Sensor Test')

randomsounddict = default_touchpad(1, mode_dict)

print("random sound dictionary is ",randomsounddict)




for k,v in randomsounddict.items():
    randomsounddict[k].set_volume(1)
    #randomsounddict[k].play()




print('Press Ctrl-C to quit.')
last_touched = cap.touched()
while True:
    current_touched = cap.touched()
    # Check each pin's last and current state to see if it was pressed or released.
    for i in range(12):
        # Each pin is represented by a bit in the touched value.  A value of 1
        # means the pin is being touched, and 0 means it is not being touched.
        pin_bit = 1 << i
        # First check if transitioned from not touched to touched.
        if current_touched & pin_bit and not last_touched & pin_bit:
            print('{0} touched!'.format(i))
            if (randomsounddict[i]):
                randomsounddict[i].play()
                print('{0} played!'.format(i))
               # while pygame.mixer.get_busy():
                #    print("playing")
                 #   pygame.time.delay(100)
        # Next check if transitioned from touched to not touched.
        if not current_touched & pin_bit and last_touched & pin_bit:
            print('{0} released!'.format(i))
    # Update last state and wait a short period before repeating.
    last_touched = current_touched
    time.sleep(0.1)








#boardplayer(newsounddict, 1)
#boardplayer(randomsounddict, 5)
#print("Soundlist length is ", len(soundList))
#print("Creator soundlist length is ", len(soundList2))
#while True:
 #   for i in range(len(soundList)):
#        if cap[i].value:
#            soundList[i].play()
 #           print("Input {} touched!".format(i))
#for x in soundList:
    #x.set_volume(.65)
#i2c = busio.I2C(board.SCL, board.SDA)



# clap1 = pygame.mixer.Sound('samples/1 clap-analog.wav')
# hat1 = pygame.mixer.Sound('samples/1 openhat-acoustic01.wav')
# shaker = pygame.mixer.Sound('samples/1 shaker-analog.wav')
# snare1 = pygame.mixer.Sound('samples/1 snare-acoustic01.wav')
# tom1 = pygame.mixer.Sound('samples/1 tom-808.wav')
# clap2 = pygame.mixer.Sound('samples/2 clap-808.wav')
# cow = pygame.mixer.Sound('samples/2 cowbell-808.wav')
# openhat = pygame.mixer.Sound('samples/2 openhat-slick.wav')
# crash = pygame.mixer.Sound('samples/3 crash-noise.wav')
# hihat = pygame.mixer.Sound('samples/3 hihat-digital.wav')
# snare2 = pygame.mixer.Sound('samples/3 snare-electro.wav')
# tom2 = pygame.mixer.Sound('samples/3 tom-chiptune.wav')

#soundList = [clap1, hat1, shaker, snare1, tom1, clap2, cow, openhat, crash, hihat, snare2, tom2]
#print(touchpad_randomizer())
#newsounddict = creator_touchpad(3, mode_dict, sounddict)
#sounddict = {'1': 'rain.mp3', '2': 'night2.mp3', '3': 'forest.mp3', '4': 'waves.mp3', '5': 'sea.mp3', '6': 'seagulls.mp3', '7': 'rain3.mp3', '8': 'rain2.mp3', '9': 'forest2.mp3', '10': 'birds2.mp3', '11': 'crickets.mp3', '12': 'waves.mp3'}
# def default_touchpad(mode, mode_dict):
#     tplist = touchpad_randomizer()
#     default_dict = {}
#     for soundfile in os.listdir(mode_dict[mode]):
#         while tplist and (soundfile.endswith('.wav')):  
#             k = tplist.pop()
#             v = pygame.mixer.Sound(str(mode_dict[mode])+ "/" + str(soundfile))
#             default_dict.update([(k,v)])
#     return default_dict