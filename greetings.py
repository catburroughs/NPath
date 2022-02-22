import time
import board
import busio
import adafruit_mpr121
import pygame

i2c = busio.I2C(board.SCL, board.SDA)
mpr121 = adafruit_mpr121.MPR121(i2c)

pygame.init()

clap1 = pygame.mixer.sound('samples/1 clap-analog.wav')
hat1 = pygame.mixer.sound('samples/1 openhat-acoustic01.wav')
shaker = pygame.mixer.sound('samples/1 shaker-analog.wav')
snare1 = pygame.mixer.sound('samples/1 snare-acoustic01.wav')
tom1 = pygame.mixer.sound('samples/1 tom-808.wav')
clap2 = pygame.mixer.sound('samples/2 clap-808.wav')
cow = pygame.mixer.sound('samples/2 cowbell-808.wav')
openhat = pygame.mixer.sound('samples/2 openhat-slick.wav')
crash = pygame.mixer.sound('samples/3 crash-noise.wav')
hihat = pygame.mixer.sound('samples/3 hihat-digital.wav')
snare2 = pygame.mixer.sound('samples/3 snare-electro.wav')
tom2 = pygame.mixer.sound('samples/3 tom-chiptune.wav')

soundList = [clap1, hat1, shaker, snare1, tom1, clap2, cow, openhat, crash, hihat, snare2, tom2]


while True:
    for i in range(soundList):
        if mpr121[i].value:
            soundList[i].play()
            print("Input {} touched!".format(i))




#print("Hello World")
