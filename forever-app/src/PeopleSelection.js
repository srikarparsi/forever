import React from 'react';
import {useState} from "react"
import S3FileUpload from 'react-s3';
import "typeface-montserrat"
import db from './firebase.js'
import { arrayUnion } from 'firebase/firestore';
//Optional Import
import { uploadFile } from 'react-s3';
import { Link } from 'react-router-dom';
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

    const convertToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    };

     function handleUpload() {
      if (!file) {
          alert("Please choose a file first!")
      }

      
      //const data = new FormData();
      // data.append('file', file)
      // data.append('filename', file.filename)
      const base64 = convertToBase64(file).then(result => 
        {
          console.log(result)
      // console.log(base64);
        const data = JSON.stringify({"imageUrl": result, "name": name});

      db.collection("allTags").doc("tagList").update({
          people: arrayUnion({"name": name, "imageUrl": result}),
      })

      .then(function() {
          console.log("Document successfully written");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
      // setPostImage({ ...postImage, myFile: base64 });
      console.log(data);
      const response = axios.post('https://forever.ngrok.io/upload-photo', data, 
        {headers: {
            // 'Content-Type': 'multipart/form-data',
            'Content-Type': 'application/json',
          }}
          ).then(response => console.log("response: ", response))
      //const { response } = axios.post("https://forever.ngrok.io/upload-photo", {file: file}).then(response => console.log("server response: ", response))

      //S3FileUpload.uploadFile(file, config).then(data => console.log(data)).catch(err => console.error(err));
      // uploadFile(file, config).then(data => console.log(data)).catch(err => console.error(err));
    });
    }

    let name = "";

    function changeName(value) {
      name = value.name;
    }
    
    return (
      <div className='CustomBody'>
          <h1 style={{fontFamily: "Montserrat", marginTop:"200px", marginBottom:"75px", color:"white"}}> who do you want to remember </h1>
          <div className='button-purple' style={{margin:"0px 510px"}}>
          <label>
            Name:
            <input type="text" name="name" onChange={changeName}/>
          </label>
          </div>
          
          <div className='parent'>
            <div className='child'>
              <div>
                <input className="button-purple" type="file" accept="image/*" onChange={handleChange}/>
              </div>
            </div>
            <div className='child'>
              <div>
                <button className="button-purple" onClick={handleUpload}>upload</button>
              </div>
            </div>
          </div>
          <div className="button-grey">
            <Link to="/second">Next</Link>
          </div>
      </div>
    );
  };
  
  export default PeopleSelection;