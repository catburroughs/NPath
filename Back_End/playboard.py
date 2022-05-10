import time
import sys
import os
import board
import busio
import pygame
import random
import Adafruit_MPR121.MPR121 as MPR121


class Board:
    def __init__(self, volume, mode, sound_dict = False):
        self.volume = volume
        self.mode = mode
        self.sound_dict = sound_dict
        NPath_Sounds = '/home/pi/NPath/Back_End/NPath_Sounds/'
        Creator_Sounds = '/home/pi/NPath/Creator_Sounds/'
        Nature_Sounds = '/home/pi/NPath/Back_End/Nature_Sounds/'
        self.mode_dict = {1:NPath_Sounds,2:Nature_Sounds,3:Creator_Sounds}
        
    def get_soundfile(self):
        return self.mode_dict[self.mode]
    
    
    def set_soundlist(self):
        #mode = self.get_mode()
        setsoundlist = []
        for soundfile in os.listdir(self.mode_dict[self.mode]):
            if soundfile.endswith('.wav'):
                path = self.mode_dict[mode] + str(soundfile)
                setsoundlist.append(pygame.mixer.Sound(path))
        random.shuffle(setsoundlist)
        return setsoundlist[:12]    
    
    def default_touchpad(self):
        tplist = self.set_soundlist()
        default_dict = {}
        for x in tplist:
            default_dict[tplist.index(x)] =  x
        return default_dict
    
    
    def set_creator_sound(self, soundfile):
        #mode = self.get_mode()
        if soundfile.endswith('.wav'):
            path = self.mode_dict[self.mode] + str(soundfile)
        return pygame.mixer.Sound(path)
        
    def creator_touchpad(self):
        final_dict = {}
        #sounddict = self.get_touchpad_dict()
        for k,v in self.sounddict.items():
            key = int(k)
            final_dict[key] =  self.set_creator_sound(v)
        return final_dict
    
    def quit_playing(self):
        pygame.quit() 
        

    def playBoard(self):
        print('Capacitive Touch Hat Initialising')
        #pygame.mixer.pre_init(44100, 16, 2, 4096)
        # Creating MPR121 instance.
        pygame.mixer.init()
        pygame.init()
        cap = MPR121.MPR121()
        cap.begin()
        cap.set_thresholds(6, 4)
        if not cap.begin():
            print('MPR121 encountered error and shut down.')
            sys.exit(1)
            
        if self.mode == 3:
            self.sound_dict = self.creator_touchpad()
        else:
            self.sound_dict = self.default_touchpad()


        for k,v in self.sound_dict.items():
            v.set_volume(self.volume)
            
        print("playboard sound dict is ", self.sound_dict)
        testsound = pygame.mixer.Sound('/home/pi/NPath/Back_End/Nature_Sounds/rain2.wav')
        testsound.set_volume(1)
        testsound.play()



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
                        print("This is being played --->", self.sound_dict[i])
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
      
        
        
            

