import React, {useEffect, useState} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@mui/material/Alert';


class SoundFileUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      URL: '',
      loading: false,
      alert: false
    };
    this.handleUpload = this.handleUpload.bind(this);
  }



  

  handleUpload(ev) {
    ev.preventDefault();
    const data = new FormData();
    
    for (let i = 0; i < this.uploadInput.files.length; i++) {
        data.append("file", this.uploadInput.files[i]);
      }

    fetch('http://192.168.148.150:5000/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ URL: `http://192.168.148.150:5000/${body.file}`});
      });
    })
    .then(this.setState({loading: true}))
    .then(setTimeout(()=>{this.setState({loading: false})},30000))
    .then(setTimeout(()=>{this.setState({alert: true})},30000))
    .catch((error) => console.log(error));
  }

  render() {
    return (
      <>
      {this.state.alert && <Alert  role="alert" severity = "success">File Uploaded</Alert>}
      {this.state.loading && <CircularProgress color="secondary"/>}
      <form onSubmit={this.handleUpload}>
        <div>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file"  multiple="true" />
        </div>
        <br />
        <div>
          <button >
          Upload
          </button>
          </div>
      </form>
      </>
    );
  }
}

export default SoundFileUploader;