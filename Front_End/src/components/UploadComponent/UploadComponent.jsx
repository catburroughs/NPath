import React from "react";

export default class UploadComponent extends React.Component  {
    constructor(props) {
      super(props);
      this.state = {
      };
  
      this.handleUpload = this.handleUpload.bind(this);
    }
  
    handleUpload(ev) {
      ev.preventDefault();
  
      const data = new FormData();
      for (let i = 0; i < this.uploadInput.files.length; i++) {
        data.append("file", this.uploadInput.files[i]);
      }
    
      fetch("http://localhost:5000/upload", {
        method: "POST",
        body:data,
      }).then((response) => {
        response.json().then((res) => {
          console.log(res);
        });
      });
    }
  
    render() {
      return (
        <form onSubmit={this.handleUploadImage}>
          <div>
          <input ref={(ref) => {this.uploadInput = ref; }} type="file" multiple
            />
          </div>
          <br />
          <div>
            <button>Upload</button>
          </div>
        </form>
      );
    }
  }