import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import "typeface-montserrat"
import db from "./firebase";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
//Functional Component 

const options = [
    'food', 'technology', 'family'
  ];

const Second = () => {

  const axios = require('axios').default;

    let curr = "";

    const handleChange = (event) => {
        curr = event.value;
    };

    function handleUpload() {
        db.collection("allTags").doc("tagList").update({
            tags: arrayUnion(curr),
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });

        addDoc(collection(db, curr), {
          });
    }

    function sendToServer() {
      const data = JSON.stringify({"faces": "alice,anhphu", "tags": "technology"});
      const response = axios.post('https://forever.ngrok.io/batch-process', data, 
        {headers: {
            // 'Content-Type': 'multipart/form-data',
            'Content-Type': 'application/json',
          }}
          ).then(response => console.log("response: ", response))
    }

  return (
    <div className="CustomBody">
        <h1 style={{textAlign:"center", fontFamily:"Montserrat", marginTop:"200px", color:"white"}}>
            what do you want to remember
        </h1>
        <div className='parent'>
            <div className='child'>
            <div style={{backgroundColor: "thistle", margin: "25px", width:"500px"}}>
          <Dropdown options={options} onChange={handleChange} placeholder="Select an option" />
        </div>
            </div>
            <div className='child'>
            <div>
                    <button className="button-purple" onClick={handleUpload}>upload</button>
                 </div>
            </div>
          </div>
          <button className="button-purple" onClick={sendToServer} style={{margin:"20px 550px"}}>send to server</button>
          <div className="button-grey" style={{marginTop:"60px"}}>
                    <Link to="/third">Next</Link>
                </div>
    </div>
    
  );
};

export default Second;