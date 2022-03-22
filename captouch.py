import time
#import board
#import busio
#import adafruit_mpr121
import pygame
import samples
import os
import json

class NPath: 
    def __init__(self):
        #i2c = busio.I2C(board.SCL, board.SDA)
        #mpr121 = adafruit_mpr121.MPR121(i2c)
        #self.mpr121 = mpr121
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


    def make_soundlist(self): #no longer need, first test function
        clap1 = pygame.mixer.Sound('samples/1 clap-analog.wav')
        hat1 = pygame.mixer.Sound('samples/1 openhat-acoustic01.wav')
        shaker = pygame.mixer.Sound('samples/1 shaker-analog.wav')
        snare1 = pygame.mixer.Sound('samples/1 snare-acoustic01.wav')
        tom1 = pygame.mixer.Sound('samples/1 tom-808.wav')
        clap2 = pygame.mixer.Sound('samples/2 clap-808.wav')
        cow = pygame.mixer.Sound('samples/2 cowbell-808.wav')
        openhat = pygame.mixer.Sound('samples/2 openhat-slick.wav')
        crash = pygame.mixer.Sound('samples/3 crash-noise.wav')
        hihat = pygame.mixer.Sound('samples/3 hihat-digital.wav')
        snare2 = pygame.mixer.Sound('samples/3 snare-electro.wav')
        tom2 = pygame.mixer.Sound('samples/3 tom-chiptune.wav')

        self.soundlist = [clap1, hat1, shaker, snare1, tom1, clap2, cow, openhat, crash, hihat, snare2, tom2]
 
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
        
    def play_board(self, soundlist):
        for x in soundlist:
            x.set_volume(self.volume)
        while True:
            for i in self.touchPads:        #range(len(soundlist)):
                if self.mpr121[i].value:
                    soundlist[i].play()
                    print("Input {} touched!".format(i))




