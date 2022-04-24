import time
import sys
#import board
#import busio
import pygame
import os
import json
#import Adafruit_MPR121.MPR121 as MPR121
#import Nature_Sounds
#import NPath_Sounds
#import Creator_Sounds
import random
pygame.init()
sounddict = {'1': 'LabelledFile4.wav', '2': 'LabelledFile15.wav', '3': 'LabelledFile16.wav', '4': 'LabelledFile2.wav', '5': 
'LabelledFile3.wav', '6': 'LabelledFile20.wav', '7': 'LabelledFile15.wav', '8': 'LabelledFile2.wav', '9': 'LabelledFile14.wav', '10': 'LabelledFile3.wav', '11': 'LabelledFile15.wav', '12': 'LabelledFile16.wav'}

mode_dict = {1:"NPath_Sounds",2:"Nature_Sounds",3:"Creator_Sounds"}

def touchpad_randomizer():
    used_list = []
    while len(used_list) < 12:
        tp = random.randint(1,12)
        if tp not in used_list:
            used_list.append(tp)
    return used_list
           

def default_touchpad(mode, mode_dict):
    tplist = touchpad_randomizer()
    default_dict = {}
    for soundfile in os.listdir(mode_dict[mode]):
        if soundfile.endswith('.wav')or soundfile.endswith('.mp3'):
            k = tplist.pop()
            v = pygame.mixer.Sound(str(mode_dict[mode])+ "/" + str(soundfile))
            default_dict.update([(k,v)])
    return default_dict



def creator_touchpad(mode, mode_dict, sounddict):
    final_dict = {}
    for soundfile in os.listdir(mode_dict[mode]):
        for k,v in sounddict.items():
            if soundfile == v and (soundfile.endswith('.wav')or soundfile.endswith('.mp3')):
                v = pygame.mixer.Sound(str(mode_dict[mode])+ "/" + str(soundfile))
                final_dict.update([(int(k),v)])
                
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
#print(touchpad_randomizer())
#newsounddict = creator_touchpad(3, mode_dict, sounddict)
randomsounddict = default_touchpad(3, mode_dict)
#boardplayer(newsounddict, 1)
boardplayer(randomsounddict, 5)
# Create MPR121 instance.
#cap = MPR121.MPR121()

# Initialize communication with MPR121 using default I2C bus of device, and
# default I2C address (0x5A).  On BeagleBone Black will default to I2C bus 0.
#if not cap.begin():
#    print('Error initializing MPR121.  Check your wiring!')
#    sys.exit(1)
#i2c = busio.I2C(board.SCL, board.SDA)


#pygame.init()
#cap.begin()
#cap.set_thresholds(6, 4)

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
#soundList = set_soundlist()
#soundList2 = creator_soundlist()

#for x in soundList:
    #x.set_volume(.65)

#print("Soundlist length is ", len(soundList))
#print("Creator soundlist length is ", len(soundList2))
#while True:
 #   for i in range(len(soundList)):
#        if cap[i].value:
#            soundList[i].play()
 #           print("Input {} touched!".format(i))


# print('Press Ctrl-C to quit.')
# last_touched = cap.touched()
# while True:
#     current_touched = cap.touched()
#     # Check each pin's last and current state to see if it was pressed or released.
#     for i in range(12):
#         # Each pin is represented by a bit in the touched value.  A value of 1
#         # means the pin is being touched, and 0 means it is not being touched.
#         pin_bit = 1 << i
#         # First check if transitioned from not touched to touched.
#         if current_touched & pin_bit and not last_touched & pin_bit:
#             print('{0} touched!'.format(i))
#             if (soundList[i]):
#                 soundList[i].play()
#         # Next check if transitioned from touched to not touched.
#         if not current_touched & pin_bit and last_touched & pin_bit:
#             print('{0} released!'.format(i))
#     # Update last state and wait a short period before repeating.
#     last_touched = current_touched
#     time.sleep(0.1)

#print("Hello World")





