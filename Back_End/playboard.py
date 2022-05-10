import time
import sys
import os
import board
import busio
import pygame
import random
import Adafruit_MPR121.MPR121 as MPR121
import threading


class Playboard:
    def __init__(self):
        self.sound_dict = {}
        self.volume = .65
        threading.Thread(target=lambda: self.run()).start()  
        # self.volume = volume
        # self.mode = mode
        # self.touchpads = touchpads
        # NPath_Sounds = '/home/pi/NPath/Back_End/NPath_Sounds/'
        # Creator_Sounds = '/home/pi/NPath/Creator_Sounds/'
        # Nature_Sounds = '/home/pi/NPath/Back_End/Nature_Sounds/'
        # self.mode_dict = {1:NPath_Sounds,2:Nature_Sounds,3:Creator_Sounds}
        # threading.Thread(target=lambda: self.run()).start()  
        
    def run(self):
        print('Capacitive Touch Hat Initialising')
        #pygame.mixer.pre_init(44100, 16, 2, 4096)
        # Creating MPR121 instance.
        
        

        # if self.mode == 3:
        #     sound_dict = self.creator_touchpad()
        # else:
        #     print("default touchpad initialising")
        #     sound_dict = self.default_touchpad()
            
        cap = MPR121.MPR121()
        cap.begin()
        cap.set_thresholds(6, 4)
        if not cap.begin():
            print('MPR121 encountered error and shut down.')
            sys.exit(1)
            
        

        print("volume setting starting")
        for k,v in self.sound_dict.items():
            v.set_volume(self.volume)
            
        #print("playboard sound dict is ", sound_dict)
        #testsound = pygame.mixer.Sound('/home/pi/NPath/Back_End/Nature_Sounds/rain2.wav')
        #testsound.set_volume(1)
        #testsound.play()



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
                    if self.sound_dict[i]:
                        self.sound_dict[i].play()
                        print("This is being played --->", sound_dict[i])
                        print('{0} played!'.format(i))
                        if pygame.mixer.get_busy():
                            print("playing here")
                            #pygame.time.delay(50)
                # Next check if transitioned from touched to not touched.
                if not current_touched & pin_bit and last_touched & pin_bit:
                    print('{0} released!'.format(i))
            # Update last state and wait a short period before repeating.
            last_touched = current_touched
            time.sleep(0.1)
      
        
        
            

