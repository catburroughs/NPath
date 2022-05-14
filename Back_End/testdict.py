import time
import sys
import board
import busio
import pygame
import os
import json
import Adafruit_MPR121.MPR121 as MPR121
import random

#testdict.py is used for debugging the hardware and checking Pygame functionality
#absolute paths need to be changed to reflect user's file system
#this file can be played on it's own by running 'sudo python3 testdict.py' in the terminal

NPath_Sounds = '/home/pi/NPath/Back_End/NPath_Sounds/' #these three absolute paths need to be adapted to the user's system
Creator_Sounds = '/home/pi/NPath/Creator_Sounds/'
Nature_Sounds = '/home/pi/NPath/Back_End/Nature_Sounds/'


mode_dict = {1:NPath_Sounds,2:Nature_Sounds,3:Creator_Sounds}

# Create MPR121 instance.
cap = MPR121.MPR121()
cap.begin()
cap.set_thresholds(6, 4)
pygame.mixer.init() 

if not cap.begin():
   print('Error initializing MPR121.  Check your wiring!')
   sys.exit(1)   
    
def get_soundfile(mode):
    return mode_dict[mode]

def touchpad_randomizer():
    tplist = list(range(12))
    random.shuffle(tplist)
    return tplist

def set_soundlist(mode, mode_dict):
    setsoundlist = []
    for soundfile in os.listdir(mode_dict[mode]):
        if soundfile.endswith('.wav'):
            path = mode_dict[mode] + str(soundfile)
            print("sound path is ", path)
            setsoundlist.append(pygame.mixer.Sound(path))
    random.shuffle(setsoundlist)
    return setsoundlist[:12]
           

def default_touchpad(mode, mode_dict):
    tplist = set_soundlist(mode, mode_dict)
    print("tplist is ", tplist)
    default_dict = {}
    for x in tplist:
        default_dict[tplist.index(x)] =  x
    return default_dict

#touchhand mimics a user touching a random touchpad

def touchhand():
    return random.randint(1,12)

#this method can be used with the sound dictionary for debugging
#call with the sound dictionary and the number of times the user 'touches' a random touchpad to check the dictionary
#works and the Pygame sound objects are playing
#this methhod can be called without any hardware

def boardplayer(soundict, numbertouched):
    print(soundict)
    for x in range(numbertouched):
        tp = touchhand()
        print("tp is " ,tp)
        if tp in soundict:
            print("tp in soundict")
            soundict[tp].play()
            print("Input {} touched!".format(tp))
        



#this command will mimic the two default modes
randomsounddict = default_touchpad(1, mode_dict) #uncomment to check NPath Mode
#randomsounddict = default_touchpad(2, mode_dict) #uncomment to check Nature Mode
#boardplayer(randomsounddict, 5) #uncomment to check Pygame functionality without hardware

print("random sound dictionary is ",randomsounddict)

for k,v in randomsounddict.items():
    randomsounddict[k].set_volume(1)

#the following five lines check that the Pygame sound object is playing correctly
print("Starting testsound now")
testsound = pygame.mixer.Sound('/home/pi/NPath/Back_End/Nature_Sounds/rain1.wav')
testsound.set_volume(1)
testsound.play()
print(testsound)



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
        # Next check if transitioned from touched to not touched.
        if not current_touched & pin_bit and last_touched & pin_bit:
            print('{0} released!'.format(i))
    # Update last state and wait a short period before repeating.
    last_touched = current_touched
    time.sleep(0.1)

