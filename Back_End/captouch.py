import json
import os
import sys
import time
#import Nature_Sounds
#import Creator_Sounds
import NPath_Sounds
import pygame

#from Back_End.playboard import playBoard

class NPath: 
    def __init__(self):
        pygame.init()
        self.mode_dict = {1:"Back_End\\NPath_Sounds",2:"Back_End\\Nature_Sounds",3:"NPath\\Creator_Sounds"}
        self.set_mode()
        self.set_volume()
        self.soundlist = self.set_soundlist()
        self.touchpads = [x for x in range(12)]
        
        
        
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


    def print_soundlist(self):
        files = self.get_soundfile()
        print("Here are your sounds:")
        for soundfile in os.listdir(files):
            print(str(soundfile))


    def set_volume(self, vol=.65):
        self.volume = vol
  
                  
    def get_volume(self):
        return self.volume
  
    
    def print_volume(self):
        print("Your current volume is", self.get_volume())
   
        
    def play_board(self):
        while True:
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

