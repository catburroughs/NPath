from ast import While
import json
import os
import sys
import time
import random
#import pygame

from playboard import Board


class NPath: 
    def __init__(self):
           
        self.set_mode()
        self.set_volume()
        #pygame.mixer.pre_init(44100, 16, 2, 4096)
        #pygame.init()
        self.touchpad_dict = {}
        self.board_status = False
        # NPath_Sounds = '/home/pi/NPath/Back_End/NPath_Sounds/'
        # Creator_Sounds = '/home/pi/NPath/Creator_Sounds/'
        # Nature_Sounds = '/home/pi/NPath/Back_End/Nature_Sounds/'
        # self.mode_dict = {1:NPath_Sounds,2:Nature_Sounds,3:Creator_Sounds}
        
    def get_activation(self):
        return self.board_status
    
    def set_activation(self, status):
        self.board_status = status
        
    def set_touchpad_dict(self, dict):
        self.touchpad_dict = dict
        
    def get_touchpad_dict(self):
        return self.touchpad_dict
        
    def get_mode(self):
        return self.mode
        
        
    def set_mode(self, newmode=1):
         self.mode = newmode
         
    def get_volume(self):
        return self.volume     
     
    def set_volume(self, vol=.65):
        self.volume = vol
  
        
    # def get_soundfile(self):
    #     return self.mode_dict[self.mode]
    
    
    # def set_soundlist(self):
    #     mode = self.get_mode()
    #     setsoundlist = []
    #     for soundfile in os.listdir(self.mode_dict[mode]):
    #         if soundfile.endswith('.wav'):
    #             path = self.mode_dict[mode] + str(soundfile)
    #             setsoundlist.append(pygame.mixer.Sound(path))
    #     random.shuffle(setsoundlist)
    #     return setsoundlist[:12]    
    
    # def default_touchpad(self):
    #     tplist = self.set_soundlist()
    #     default_dict = {}
    #     for x in tplist:
    #         default_dict[tplist.index(x)] =  x
    #     return default_dict
    
    
    # def set_creator_sound(self, soundfile):
    #     mode = self.get_mode()
    #     if soundfile.endswith('.wav'):
    #         path = self.mode_dict[mode] + str(soundfile)
    #     return pygame.mixer.Sound(path)
        
    # def creator_touchpad(self):
    #     final_dict = {}
    #     sounddict = self.get_touchpad_dict()
    #     for k,v in sounddict.items():
    #         key = int(k)
    #         final_dict[key] =  self.set_creator_sound(v)
    #     return final_dict      
 
             
    def play_board(self, quit = False):
        mode = self.get_mode()
        if self.board_status:
            print("BOARD IS ON in ", mode)
            #print("captouch into playboard sound dict is ", self.sound_dict)
            newBoard = Board(self.get_volume(), self.get_mode(), self.get_touchpad_dict())
            newBoard.playBoard()
            if quit:
                newBoard.quit_playing()
        else:
            print("Error Board Not On")
    



#print("default dict is ", default_dict)
#print("tplist is ", tplist)
    # def set_soundlist(self, folder = 'NPath_Sounds'):
    #     setsoundlist = []
    #     for soundfile in os.listdir(folder):
    #         #if soundfile.endswith('.wav'):
    #         setsoundlist.append(pygame.mixer.Sound(folder + '/' + str(soundfile)))
    #         ##else:
    #             #print("Music files must be .wav")
    #             #break
    #     return setsoundlist

   # def creator_soundlist(self, files):
    #     self.creatorsoundlist = []
    #     for x in files:
    #         self.creatorsoundlist.append(pygame.mixer.Sound("files/" + str(x)))
    #     return self.creatorsoundlist
    
    # def get_touchpad_dict(self, dict):
    #     self.touchpad_dict = dict
    #     return self.touchpad_dict
    
    # def print_soundlist(self):
    #     sfiles = self.get_soundfile()
    #     print("Here are your sounds:")
    #     for soundfile in os.listdir(sfiles):
    #         print(str(soundfile))
    # def print_volume(self):
    #     print("Your current volume is", self.get_volume())
        
    #     def set_soundlist(self):
    #     sfiles = self.get_soundfile()
    #     setsoundlist = []
    #     for soundfile in os.listdir(sfiles):
    #         if soundfile.endswith('.wav') or soundfile.endswith('.mp3'):
    #             setsoundlist.append(pygame.mixer.Sound(sfiles + "/" + str(soundfile)))
    #     return setsoundlist
    
    # def return_creator_folder(self):
    #     creatorsoundlist = []
    #     for creatorfiles in os.listdir('D:\\Aberdeen Final Project\\NPath\\Creator_Sounds\\'):
    #         print(creatorfiles)
    #         if creatorfiles.endswith('.wav') or creatorfiles.endswith('.mp3'):
    #             creatorsoundlist.append(str(creatorfiles))
    #     return creatorsoundlist
