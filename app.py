from captouch import NPath
import pygame
from flask import Flask, render_template, Response

npath = NPath()

npath.set_volume()
#npath.make_soundlist()
sList = npath.set_soundlist()
#npath.print_soundlist()
#npath.print_volume()
#npath.play_board(sList)
volume = npath.get_volume()

app=Flask(__name__)

@app.route('/')

def index():
    return str(volume)

if __name__=='__main__':
    app.run(debug=True, port=5000, host='0.0.0.0', threaded=True)
    