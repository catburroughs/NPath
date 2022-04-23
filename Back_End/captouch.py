from ast import While
import json
import os
import sys
import time
#import Nature_Sounds
#import Creator_Sounds
import NPath_Sounds
import pygame
#D:\Aberdeen Final Project\NPath\Creator_Sounds
#from Back_End.playboard import playBoard
#from Back_End.creatorboard import creatorBoard

class NPath: 
    def __init__(self):
        pygame.init()
        self.mode_dict = {1:"Back_End\\NPath_Sounds",2:"Back_End\\Nature_Sounds",3:"NPath\Creator_Sounds"}
        self.set_mode()
        self.set_volume()
        self.set_activation()
        self.soundlist = self.set_soundlist()
        self.touchpads = [x for x in range(12)]
        self.touchpad_dict = {}
        self.board_status = self.get_activation()
        
    def get_activation(self):
        return self.board_status
    
    def set_activation(self, status = False):
        self.board_status = status
        
        
    def get_touchpad_dict(self, dict):
        self.touchpad_dict = dict
        return self.touchpad_dict
        
        
        
    def set_mode(self, newmode=1):
         self.mode = newmode
     
    def get_mode(self):
        print(self.mode)
        return self.mode
       
   # def get_mode(self):
   #      if self.mode == 1:
   #          return("NPath Sounds mode is on.")
  #       if self.mode == 2:
   #          return("Nature Sounds mode is on.")
   #      else:
    #         return("Upload files to create new mode.")
       
         
    def get_soundfile(self):
        return self.mode_dict[self.mode]
        
        
    def set_soundlist(self):
        sfiles = self.get_soundfile()
        setsoundlist = []
        for soundfile in os.listdir(sfiles):
            if soundfile.endswith('.wav') or soundfile.endswith('.mp3'):
                setsoundlist.append(pygame.mixer.Sound(sfiles + "/" + str(soundfile)))
        return setsoundlist
    
    def return_creator_folder(self):
        creatorsoundlist = []
        for creatorfiles in os.listdir('D:\\Aberdeen Final Project\\NPath\\Creator_Sounds\\'):
            print(creatorfiles)
            if creatorfiles.endswith('.wav') or creatorfiles.endswith('.mp3'):
                creatorsoundlist.append(str(creatorfiles))
        return creatorsoundlist
            
        


    def print_soundlist(self):
        sfiles = self.get_soundfile()
        print("Here are your sounds:")
        for soundfile in os.listdir(sfiles):
            print(str(soundfile))


    def set_volume(self, vol=.65):
        self.volume = vol
  
                  
    def get_volume(self):
        return self.volume
  
    
    def print_volume(self):
        print("Your current volume is", self.get_volume())
   
        
    def play_board(self):
        if self.mode == 3 and self.activation:
            playCreatorBoard(self.soundlist, self.volume, self.touchpad_dict)
        elif (self.mode == 1 or self.mode == 2) and self.activation:
            playBoard(self.soundlist, self.volume)





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

