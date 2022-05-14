from captouch import NPath
import json
import uuid
import all_forms
from flask import Flask, render_template, Response, request, redirect, url_for, flash, send_file, abort, current_app,jsonify
from werkzeug.utils import secure_filename
import os
from flask_wtf.csrf import CSRFProtect
from flask_cors import CORS

#app.py runs the Flask app and instantiates the NPath class object which controls program settings
#CORS security is established and the upload folder path is set out

npath = NPath()
npath.set_volume()
npath.set_mode()
csrf = CSRFProtect()
cors = CORS()
app=Flask(__name__)
SECRET_KEY = os.urandom(32)
app.config['SECRET_KEY'] = SECRET_KEY
csrf.init_app(app)
cors.init_app(app)
path = os.getcwd()
UPLOAD_FOLDER = os.path.join(path, '/home/pi/NPath/Creator_Sounds') #change this absolute path to your system's set up
if not os.path.isdir(UPLOAD_FOLDER):
    os.mkdir(UPLOAD_FOLDER)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

#API app routes for communicating with the React Front End

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

@app.route("/getactivation", methods=["GET"], strict_slashes=False)
@csrf.exempt
def get_board_status():
    print("Activation is ", npath.get_activation())
    status =  npath.get_activation()
    if status:
        return jsonify("on")
    else:
        return jsonify("off")

@app.route("/setactivation", methods=["POST"], strict_slashes=False)
@csrf.exempt
def activate_board():
    activation = request.json['activation']
    if activation == "on":
        npath.set_activation(True)
        if npath.get_mode() == 3:
            print("creator mode is ", npath.get_mode())
            npath.set_playboard_sounds(npath.creator_touchpad())
        else:
            print("the current mode is ", npath.get_mode())
            npath.set_playboard_sounds(npath.default_touchpad())
    else:
        npath.set_activation(False)
    print(activation)
    return jsonify({"message": "OK"})


@app.route("/gettouchpads", methods=["POST"], strict_slashes=False)
@csrf.exempt
def get_touchpads():
    req = request.get_json()
    touchpads = request.json['touchpads']
    print(req)
    print("touchpads received are", touchpads)
    npath.set_touchpad_dict(touchpads)
    return jsonify({"message": "OK"})

@app.route('/getsoundfiles', methods=['GET'], strict_slashes=False)
@csrf.exempt
def getsoundfiles():
    return_soundlist = []
    files_from_folder = _get_files()
    for key,value in files_from_folder.items():
        return_soundlist.append(value)
    print("files from folder are ", return_soundlist) #print statement for debugging
    return jsonify(return_soundlist)


@app.route('/upload', methods=['POST'])
@csrf.exempt
def upload_file():
    print("Upload files are started")
    if 'file' not in request.files:
        print("1: file not in request files")
        flash('No file part')
        return redirect(request.url)
  
    upload_files = request.files.getlist('file')
    print("upload files ---->", str(upload_files)) #print statement for debugging
  
    if not upload_files:
        print("2: file not in upload files")
        flash('No selected file')
        return redirect(request.url)
    for file in upload_files:
        filename = file.filename
        file.save(os.path.join(UPLOAD_FOLDER, filename)) 
        file_list = os.path.join(UPLOAD_FOLDER, 'files.json')
        files = _get_files()
        files[filename] = filename # creates a json list with the names of all sound files uploaded
        with open(file_list, 'w') as fh:
            json.dump(files, fh)
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


#the following code is a rudimentary gui for the Flask app in case functionality needs to be checked without the React Front End
#access is gained via the ip address of the Back End
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
        return redirect('/')
    return render_template('volume.html',form=form)


           



if __name__=='__main__':
    app.run(debug=True, port=5000, host='0.0.0.0', threaded=True)
    