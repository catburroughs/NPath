from ast import While
import json
import os
import sys
import time
import random
import pygame

from playboard import Playboard


class NPath: 
    def __init__(self):
        pygame.mixer.init(44100, 16, 2, 4096) #this sets audio frequencey, bitsize, channels, and buffer
        self.set_mode()
        self.set_activation()
        self.touchpad_dict = {}
        self.board_status = self.get_activation()
        self.play_board = Playboard()
        NPath_Sounds = '/home/pi/NPath/Back_End/NPath_Sounds/'
        Creator_Sounds = '/home/pi/NPath/Creator_Sounds/'
        Nature_Sounds = '/home/pi/NPath/Back_End/Nature_Sounds/'
        self.mode_dict = {1:NPath_Sounds,2:Nature_Sounds,3:Creator_Sounds}
        
    def set_volume(self, vol=.65):
        self.play_board.volume = vol
    
    def get_volume(self):
        return self.play_board.volume    
     
    def set_mode(self, newmode=1):
         self.mode = newmode
        
    def get_mode(self):
        return self.mode
               
    def set_touchpad_dict(self, dict):
        print("new touchpad dict is", dict)
        self.touchpad_dict = dict
        
    def get_touchpad_dict(self):
        return self.touchpad_dict
        
    def set_playboard_sounds(self, sound_dict):
        print("new sound dict is", sound_dict)
        self.play_board.sound_dict = sound_dict
   
    def get_soundfile(self):
        return self.mode_dict[self.mode]
    
    def set_soundlist(self):
        mode = self.get_mode()
        setsoundlist = []
        for soundfile in os.listdir(self.mode_dict[mode]):
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
        mode = self.get_mode()
        if soundfile.endswith('.wav'):
            path = self.mode_dict[mode] + str(soundfile)
        return pygame.mixer.Sound(path)
        
    def creator_touchpad(self):
        final_dict = {}
        sounddict = self.get_touchpad_dict()
        for k,v in sounddict.items():
            key = int(k)
            final_dict[key] =  self.set_creator_sound(v)
        return final_dict  
        
    def get_activation(self):
        return self.board_status    
    
    def set_activation(self, status=False):
        self.board_status = status
 
             
