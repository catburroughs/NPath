from flask_wtf import FlaskForm
from flask_wtf.file import FileAllowed, FileField, FileRequired
from wtforms import StringField, SubmitField, SelectField, MultipleFileField, BooleanField
from wtforms.validators import DataRequired

class Volume(FlaskForm):
    set_volume = StringField('volume')
    submit = SubmitField('Submit')

class FileUpload(FlaskForm):
    soundfiles = MultipleFileField('filename', validators=[FileRequired()])
    upload = SubmitField('Upload')
    
class LandingPage(FlaskForm):
    select = SelectField(u'Choose Mode',choices=[('1',"Default Mode"),('2',"Creator Mode")], validators=[DataRequired()])
    submit = SubmitField('Submit')
    
    
    