import React from 'react';
import {useState} from "react"
import S3FileUpload from 'react-s3';
 
//Optional Import
import { uploadFile } from 'react-s3';
window.Buffer = window.Buffer || require("buffer").Buffer; 
 
const PeopleSelection = () => {
    const axios = require('axios').default;
    const [file, setFile] = useState("");
    // const config = {
    //   bucketName: 'forever-videos', dirName: 'photos', region: 'us-east-1', accessKeyId: 'AKIAVKXSYGKYRNJB6GZC', secretAccessKey: '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',
    // }

     function handleChange(event) {
         setFile(event.target.files[0]);
     }

     function handleUpload() {
      if (!file) {
          alert("Please choose a file first!")
      }
      const { response } = axios.post("https://forever.ngrok.io/upload-photo", {file: file}).then(response => console.log("server response: ", response))

      // S3FileUpload.uploadFile(file, config).then(data => console.log(data)).catch(err => console.error(err));
      // uploadFile(file, config).then(data => console.log(data)).catch(err => console.error(err));
     }
    
    return (
      <div className='PeopleSelection'>
          <h1> who do you want to remember! </h1>
            <div>
              <input type="file" accept="image/*" onChange={handleChange}/>
           </div>
           <div>
            <button onClick={handleUpload}>upload</button>
           </div>
           <div>
            <button onClick={console.log("pressed")}>next</button>
           </div>

      </div>
    );
  };
  
  export default PeopleSelection;