from captouch import NPath
import pygame


npath = NPath()

npath.set_volume()
#npath.make_soundlist()
sList = npath.set_soundlist()
npath.print_soundlist()
npath.print_volume()
npath.play_board(sList)