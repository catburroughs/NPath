
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

    fetch('http://192.168.148.150:5000/upload', {
      method: 'POST',
      //headers: new Headers({'content-type': 'application/json'}),
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ URL: `http://192.168.148.150:5000/${body.file}` });
      });
    })
    .catch((error) => console.log(error));
  }

  render() {
    return (
      <form onSubmit={this.handleUpload}>
        <div>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file"  multiple={true} />
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