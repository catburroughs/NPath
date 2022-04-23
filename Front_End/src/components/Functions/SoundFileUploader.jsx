
import React from 'react';

class SoundFileUploader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      URL: '',
    };

    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(ev) {
    ev.preventDefault();
    const data = new FormData();
    for (let i = 0; i < this.uploadInput.files.length; i++) {
        data.append("file", this.uploadInput.files[i]);
      }
    //data.append('file', this.uploadInput.files[0]);
    //data.append('filename', this.fileName.value);

    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ URL: `http://localhost:5000/${body.file}` });
      });
    });
  }

  render() {
    return (
      <form onSubmit={this.handleUpload}>
        <div>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" multiple="true" />
        </div>
       
        <br />
        <div>
          <button>
          Upload
          </button>
          </div>
      </form>
    );
  }
}

export default SoundFileUploader;