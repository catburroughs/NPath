from captouch import NPath
import pygame
from flask import Flask, render_template, Response, request, redirect

npath = NPath()

npath.set_volume()
#npath.make_soundlist()
sList = npath.set_soundlist()
#npath.print_soundlist()
#npath.print_volume()
#npath.play_board(sList)
#volume = npath.get_volume()

app=Flask(__name__)

@app.route('/')

def index():
    volume = npath.get_volume()
    templateData = {
        'title' : 'Final Project',
        'volume': str(volume)
        }
    return render_template('index.html', **templateData)

@app.route('/data', methods = ['POST', 'GET'])
def data():
    if request.method == 'GET':
        return f"The URL /data is accessed directly. Try going to '/form' to submit form"
    if request.method == 'POST':
        form_data = request.form
        print(form_data["volume"])
        volume = npath.set_volume(form_data["volume"])
        return redirect('/')
        #return render_template('data.html',**templateData2)



if __name__=='__main__':
    app.run(debug=True, port=5000, host='0.0.0.0', threaded=True)
    