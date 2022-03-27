import time
import sys
import pygame
import Nature_Sounds
import NPath_Sounds
import Creator_Sounds
import os
import json
#from Back_End.playboard import playBoard

class NPath: 
    def __init__(self):
        pygame.init()
        self.modeDict = {1:"NPath_Sounds",2:"Nature_Sounds",3:"Creator_Sounds"}
        self.set_mode()
        self.set_volume()
        self.soundList = self.set_soundlist()
        self.touchPads = [x for x in range(12)]
        
        
        
    def set_mode(self, mode=1):
         self.mode = mode
     
        
    def get_mode(self):
         if self.mode == 1:
             return("NPath Sounds mode is on.")
         if self.mode == 2:
             return("Nature Sounds mode is on.")
         else:
             return("Upload files to create new mode.")
       
         
    def get_soundfile(self):
        return self.modeDict[self.mode]
        
        
    def set_soundlist(self):
        files = self.get_soundfile()
        setsoundlist = []
        for soundfile in os.listdir(files):
            if soundfile.endswith('.wav') or soundfile.endswith('.mp3'):
                setsoundlist.append(pygame.mixer.Sound(files + "/" + str(soundfile)))
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
            playBoard(self.soundList, self.volume)





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

