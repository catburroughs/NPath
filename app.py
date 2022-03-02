from captouch import NPath
import json
import uuid
import pygame
import all_forms
from flask import Flask, render_template, Response, request, redirect, url_for, flash, send_file, abort
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

path = os.getcwd()
UPLOAD_FOLDER = os.path.join(path, 'files')
if not os.path.isdir(UPLOAD_FOLDER):
    os.mkdir(UPLOAD_FOLDER)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


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

@app.route('/upload', methods=['GET'])
def upload():
    return _show_page()
    
        
@app.route('/upload', methods=['POST'])
@csrf.exempt
def upload_file():
    print("upload files are started")
    if 'file' not in request.files:
        print("1: file not in request files")
        flash('No file part')
        return redirect(request.url)
    #file = request.files['file']
    app.logger.info(request.files)
    upload_files = request.files.getlist('file')
    print("upload files ---->", str(upload_files))
    app.logger.info(upload_files)
    #if upload_files.validate_on_submit():
      #  print("Here are soundforms")
        #soundfiles = request.files.getlist(soundform.soundfiles)
    if not upload_files:
        print("2: file not in upload files")
        flash('No selected file')
        return redirect(request.url)
    for file in upload_files:
        original_filename = file.filename
        extension = original_filename.rsplit('.', 1)[1].lower()
        filename = str(uuid.uuid1()) + '.' + extension
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        file_list = os.path.join(UPLOAD_FOLDER, 'files.json')
        files = _get_files()
        files[filename] = original_filename
        with open(file_list, 'w') as fh:
            json.dump(files, fh)

    flash('Upload succeeded')
    return redirect(url_for('upload_file'))

    #return render_template('fileupload.html', form=soundform)

@app.route('/download/<code>', methods=['GET'])
@csrf.exempt
def download(code):
    files = _get_files()
    if code in files:
        path = os.path.join(UPLOAD_FOLDER, code)
        if os.path.exists(path):
            return send_file(path)
    abort(404)
    
    
def _get_files():
    file_list = os.path.join(UPLOAD_FOLDER, 'files.json')
    if os.path.exists(file_list):
        with open(file_list) as fh:
            return json.load(fh)
    return {}

def _show_page():
    #soundform = all_forms.FileUpload()
    files = _get_files()
    return render_template('upload.html', files=files)







if __name__=='__main__':
    app.run(debug=True, port=5000, host='0.0.0.0', threaded=True)
    