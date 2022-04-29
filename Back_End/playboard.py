import time
import sys
import board
import busio
import pygame
import random
import Adafruit_MPR121.MPR121 as MPR121
#NPath_Sounds = "/home/git/NPath/Back_End/NPath_Sounds"
#Creator_Sounds = "/home/git/NPath/Creator_Sounds"
#Nature_Sounds = "/home/git/NPath/Back_End/Nature_Sounds"


def playBoard(volume, sound_dict):
    print('Adafruit MPR121 Capacitive Touch Sensor Test')
    #pygame.init()
    #pygame.mixer.pre_init(44100, 16, 2, 4096)
    # Create MPR121 instance.
    cap = MPR121.MPR121()
    cap.begin()
    cap.set_thresholds(6, 4)
   
    # Initialize communication with MPR121 using default I2C bus of device, and
    # default I2C address (0x5A).  On BeagleBone Black will default to I2C bus 0.
    if not cap.begin():
        print('Error initializing MPR121.  Check your wiring!')
        sys.exit(1)
    #i2c = busio.I2C(board.SCL, board.SDA)


    for k,v in sound_dict.items():
        v.set_volume(volume)



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
                if i in sound_dict:
                    sound = sound_dict.get(i)
                    sound.play()
                    print('{0} played!'.format(i))
            # Next check if transitioned from touched to not touched.
            if not current_touched & pin_bit and last_touched & pin_bit:
                print('{0} released!'.format(i))
        # Update last state and wait a short period before repeating.
        last_touched = current_touched
        time.sleep(0.1)
        
        
            

