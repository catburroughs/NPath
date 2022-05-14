import time
import sys
import os
import board #comment this out if not using hardware
import busio #comment this out if not using hardware
import pygame
import random
import Adafruit_MPR121.MPR121 as MPR121 #comment this out if not using hardware
import threading

#Playboard class runs the hardware as a loop and receives volume and the sound dictionary with touchpad mapping from
#captouch.py

class Playboard:
    def __init__(self):
        self.sound_dict = {}
        self.volume = .65
        threading.Thread(target=lambda: self.run()).start()  #Playboard needs to be run threaded so as not to create multiple infinite loops on mode switch
 
        
    def run(self):
        print('Capacitive Touch Hat Initialising')            
        cap = MPR121.MPR121() #initialisation of the Adafruit capacitive touch board
        cap.begin()
        cap.set_thresholds(6, 4) #sensitivity for capacitive touch are set here
        if not cap.begin():
            print('MPR121 encountered error and shut down.')
            sys.exit(1)
            
        

        print("volume setting starting")
        for k,v in self.sound_dict.items():
            v.set_volume(self.volume) #changes the volume for the Pygame sound objects
            


        #starts the playing loop for the hardware
        print('Press Ctrl-C to quit.')
        last_touched = cap.touched()
        while True:
            current_touched = cap.touched()
            # examines the pin's previous and current state to check if it was pressed or released.
            for i in range(12):
                # Each pin is represented by a bit in the touched value.  A value of 1
                # means the pin is being touched, and 0 means it is not being touched.
                pin_bit = 1 << i
                # First check if transitioned from not touched to touched.
                if current_touched & pin_bit and not last_touched & pin_bit:
                    print('{0} touched!'.format(i))
                    if i in self.sound_dict:
                        sound = self.sound_dict.get(i)
                        sound.play()
                        print("This is being played --->", sound)
                        print('{0} played!'.format(i))
                        if pygame.mixer.get_busy():
                            print("playing here") #debugging print statements
                            print("Current volume is ", self.volume) #debugging print statements
                # Next check if transitioned from touched to not touched.
                if not current_touched & pin_bit and last_touched & pin_bit:
                    print('{0} released!'.format(i))
            # Update last state and wait a short period before repeating.
            last_touched = current_touched
            time.sleep(0.1)
      
        
        
            

