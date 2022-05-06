import React, {useEffect, useState} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';



class SoundFileUploader extends React.Component {
  constructor(props) {
    super(props);
    this.setIsLoading = {
      isLoading: false
    };
    this.uploaded = {
      isUploaded: false
    }
    this.state = {
      URL: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange(e){
    this.setIsLoading.isLoading(true)

  }


  

  handleUpload(ev) {
    ev.preventDefault();
    const data = new FormData();
    
    for (let i = 0; i < this.uploadInput.files.length; i++) {
        data.append("file", this.uploadInput.files[i]);
      }
    //data.append('file', this.uploadInput.files[0]);
    //data.append('filename', this.fileName.value);

    fetch('http://192.168.148.150:5000/upload', {
      method: 'POST',
      //headers: new Headers({'content-type': 'application/json'}),
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ URL: `http://192.168.148.150:5000/${body.file}` });
      });
    })
    .then(this.uploaded.isUploaded(true))
    .catch((error) => console.log(error));
  }

  render() {
    return (
      <form onSubmit={this.handleUpload}>
        <div>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file"  multiple={true} onChange={this.handleChange} />
        </div>
        {this.isLoading && <CircularProgress color="secondary" />} 
        {!this.isLoading && this.isUploaded && <h3>Successfully Loaded Files</h3>}
        <br />
        <div>
          <button >
          Upload
          </button>
          </div>
      </form>
    );
  }
}

export default SoundFileUploader;