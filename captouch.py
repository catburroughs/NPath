import time
import pygame
import samples
import os
import json
import playboard

class NPath: 
    def __init__(self):
        self.soundList = self.set_soundlist
        self.creatorsoundlist = []
        self.touchPads = [x for x in range(12)]
        pygame.init()
        
    def set_mode(self, mode=1):
        self.mode = mode
     
        
    def get_mode(self):
        if self.mode == 1:
            return("Default mode is on.")
        else:
            return("Upload files to create new mode.")
        
    def creator_soundlist(self, files):
        self.creatorsoundlist = []
        for x in files:
            self.creatorsoundlist.append(pygame.mixer.Sound("files/" + str(x)))
        return self.creatorsoundlist
        
    def set_soundlist(self, folder = 'samples'):
        setsoundlist = []
        for soundfile in os.listdir(folder):
            #if soundfile.endswith('.wav'):
            setsoundlist.append(pygame.mixer.Sound(folder + '/' + str(soundfile)))
            ##else:
                #print("Music files must be .wav")
                #break
        return setsoundlist

    def print_soundlist(self, folder='samples'):
        print("Here are your sounds:")
        for soundfile in os.listdir('samples'):
            print(str(soundfile))
            
    def get_soundlist(self):
        if len(self.creatorsoundlist)>1:
            print(len)
            return self.creatorsoundlist
        else:
            print("default soundlist")
            return self.soundList

    def set_volume(self, vol=.65):
        self.volume = vol
                  
    def get_volume(self):
        return self.volume
    
    def print_volume(self):
        print("Your current volume is", self.get_volume())
        
    def play_board(self):
        while True:
            playboard.playBoard(self.creatorsoundlist, self.volume)




