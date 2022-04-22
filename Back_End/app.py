from captouch import NPath
import json
import uuid
import all_forms
from flask import Flask, render_template, Response, request, redirect, url_for, flash, send_file, abort, current_app,jsonify
from werkzeug.utils import secure_filename
import os
from flask_wtf.csrf import CSRFProtect
from flask_cors import CORS


npath = NPath()

npath.set_volume()
npath.set_mode()
#npath.set_soundlist()
#npath.play_board()
csrf = CSRFProtect()
cors = CORS()
app=Flask(__name__)
SECRET_KEY = os.urandom(32)
app.config['SECRET_KEY'] = SECRET_KEY
csrf.init_app(app)
cors.init_app(app)

path = os.getcwd()
UPLOAD_FOLDER = os.path.join(path, 'Creator_Sounds')
if not os.path.isdir(UPLOAD_FOLDER):
    os.mkdir(UPLOAD_FOLDER)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route("/getmode", methods = ['GET'], strict_slashes=False)
@csrf.exempt
def getmode():
    mode = npath.get_mode()
    print("The mode from get request is ", mode)
    return jsonify(mode)

@app.route("/addmode", methods = ['POST'], strict_slashes=False)
@csrf.exempt
def sendmode():
    req = request.get_json()
    mode = request.json['mode']
    print("The mode from post request is ", mode)
    npath.set_mode(mode)
    print(req)
    return jsonify({"message": "OK"})

@app.route("/getvolume", methods = ['GET'], strict_slashes=False)
@csrf.exempt
def sendvolume():
    volume = npath.get_volume()
    return jsonify(volume)

@app.route("/addvolume", methods=["POST"], strict_slashes=False)
@csrf.exempt
def add_volume():
    req = request.get_json()
    volume = request.json['volume']
    npath.set_volume(volume)
    print(req)
    return jsonify({"message": "OK"})

@app.route("/gettouchpads", methods=["POST"], strict_slashes=False)
@csrf.exempt
def get_touchpads():
    req = request.get_json()
    touchpads = request.json['touchpads']
    #npath.set_volume(volume)
    print(req)
    print(touchpads)
    npath.get_touchpad_dict(touchpads)
    return jsonify({"message": "OK"})










####################################################
@app.route('/', methods = ['POST', 'GET'], strict_slashes=False)
def index():
    volume = npath.get_volume()
    mode = npath.get_mode()
    modeselect = all_forms.LandingPage()
    templatedata = {
    'title' : 'Final Project',
    'mode' : mode,
    'volume': str(volume)
    }
    if modeselect.validate_on_submit():
        modechoice = modeselect.select.data
        print("modechoice is",modechoice)
        npath.set_mode(int(modechoice))
        mode = npath.get_mode()
        print("the mode is",mode)
        if mode != ("NPath Sounds mode is on.") and mode != ("Nature Sounds mode is on."):
            return redirect('/upload')
        else:
            return redirect('/volume')
    return render_template('index.html', form=modeselect, **templatedata)
    
@app.route('/assigntouchpads', methods=['POST', 'GET'], strict_slashes=False)
def assigntouchpads():
    files = _get_files()
    return render_template('assigntouchpads.html', files=files)
    
    
@app.route('/volume', methods = ['POST', 'GET'], strict_slashes=False)
def volume():
    form = all_forms.Volume()
    print("volume is",form.set_volume.data)
    new_volume = form.set_volume.data
    if form.validate_on_submit():
        npath.set_volume(new_volume)
        _return_frontend(new_volume)
        return redirect('/')
    return render_template('volume.html',form=form)

@app.route('/getsoundfiles', methods=['GET'], strict_slashes=False)
@csrf.exempt
def getsoundfiles():
    return_soundlist = []
    files_from_folder = _get_files()
    for key,value in files_from_folder.items():
        #print(value)
        return_soundlist.append(value)
    print("files from folder are ", return_soundlist)
    return jsonify(return_soundlist)
           
@app.route('/upload', methods=['POST'])
@csrf.exempt
#req = request.get_json()
    #volume = request.json['volume']
def upload_file():
    print("upload files are started")
    if 'file' not in request.files:
        print("1: file not in request files")
        flash('No file part')
        return redirect(request.url)
  
    app.logger.info(request.files)
    upload_files = request.files.getlist('file')
    print("upload files ---->", str(upload_files))
    app.logger.info(upload_files)
  
    if not upload_files:
        print("2: file not in upload files")
        flash('No selected file')
        return redirect(request.url)
    for file in upload_files:
        original_filename = file.filename
        extension = original_filename.rsplit('.', 1)[1].lower()
        filename = str(uuid.uuid1()) + '.' + extension
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], original_filename)) #filename))
        file_list = os.path.join(UPLOAD_FOLDER, 'files.json')
        files = _get_files()
        files[filename] = original_filename
        with open(file_list, 'w') as fh:
            json.dump(files, fh)

    flash('Upload succeeded')
    return redirect(url_for('upload_file'))

   

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

#def _show_page():
#    files = _get_files()
#    return render_template('upload.html', files=files)


def _show_page():
    return_files = []
    sound_files = _get_files()
    for k,v in sound_files:
        return_files.append(v)
    print(return_files)
    return jsonify(return_files)





if __name__=='__main__':
    app.run(debug=True, port=5000, host='0.0.0.0', threaded=True)
    