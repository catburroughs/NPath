import time
import sys
import board
import busio
import pygame
import Adafruit_MPR121.MPR121 as MPR121


def playCreatorBoard(soundList, volume, sounddict):
    print('Adafruit MPR121 Capacitive Touch Sensor Test')

    # Create MPR121 instance.
    cap = MPR121.MPR121()

    # Initialize communication with MPR121 using default I2C bus of device, and
    # default I2C address (0x5A).  On BeagleBone Black will default to I2C bus 0.
    if not cap.begin():
        print('Error initializing MPR121.  Check your wiring!')
        sys.exit(1)
    pygame.init()
    cap.set_thresholds(6, 6)


    for x in soundList:
        x.set_volume(volume)



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
                if (soundList[i]):
                    soundList[i].play()
            # Next check if transitioned from touched to not touched.
            if not current_touched & pin_bit and last_touched & pin_bit:
                print('{0} released!'.format(i))
        # Update last state and wait a short period before repeating.
        last_touched = current_touched
        time.sleep(0.1)

