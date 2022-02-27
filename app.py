from captouch import NPath
import pygame
import all_forms
from flask import Flask, render_template, Response, request, redirect, url_for, flash
from werkzeug.utils import secure_filename
import os
from flask_wtf.csrf import CsrfProtect

npath = NPath()

npath.set_volume()
npath.set_mode()
#npath.make_soundlist()
sList = npath.set_soundlist()
#npath.print_soundlist()
#npath.print_volume()
#npath.play_board(sList)
#volume = npath.get_volume()
csrf = CsrfProtect()
app=Flask(__name__)
SECRET_KEY = os.urandom(32)
app.config['SECRET_KEY'] = SECRET_KEY
csrf.init_app(app)


@app.route('/', methods = ['POST', 'GET'])

def index():
    volume = npath.get_volume()
    mode = npath.get_mode()
    form1 = all_forms.LandingPage()
    templateData = {
    'title' : 'Final Project',
    'mode' : mode,
    'volume': str(volume)
    }
    if form1.validate_on_submit():
        modechoice = form1.select.data
        print("modechoice is",modechoice)
        #mode = dict(form1.select.choices).get(form1.select.name)
        npath.set_mode(int(modechoice))
        mode = npath.get_mode()
        print("the mode is",mode)
        if mode != ("Default mode is on."):
            return redirect('/upload')
        else:
            return redirect('/volume')
    return render_template('index.html', form=form1, **templateData)
    

@app.route('/volume', methods = ['POST', 'GET'])
def volume():
    form = all_forms.Volume()
    print("volume is",form.set_volume.data)
    new_volume = form.set_volume.data
    if form.validate_on_submit():
        volume = npath.set_volume(new_volume)
        return redirect('/')
    return render_template('volume.html',form=form)
        
@app.route('/upload', methods=['GET', 'POST'])
def upload():
    form = all_forms.FileUpload()
    
    if form.validate_on_submit():
        samples_dir = os.path.join(
            os.path.dirname(app.instance_path), 'samples'
            )

        s1 = form.file1.data
        filename = secure_filename(s1.filename)
        s1.save(os.path.join(samples_dir, filename))
        flash('Soundfile successfully uploaded')
        return redirect(url_for('upload')) #make new page for files here

    return render_template('fileupload.html', form=form)



if __name__=='__main__':
    app.run(debug=True, port=5000, host='0.0.0.0', threaded=True)
    