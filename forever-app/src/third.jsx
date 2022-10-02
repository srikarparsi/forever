import React, { useEffect, useState } from "react";
import db from "./firebase";
import { TagView } from "./tagView";
//Functional Component 

let fetched = false;

const Third = () => {

    const [favoritesList, setFavoritesList] = useState([{"url":"", "key":""}]);
    const [personList, setPersonList] = useState([{"url":"", "key":""}]);
    const [person2List, setPerson2List] = useState([{"url":"", "key":""}]);
    const [foodList, setFoodList] = useState([{"url":"", "key":""}]);

    function filterUndefined(item) {
        return item.url !== undefined;
    }

    useEffect(() => {
        getFavorites().then((response) => {
            let newList = response.docs.map(doc => doc.data());
            newList = newList.filter(filterUndefined);
            newList.map((item => {
                item.url = item.url + "?start=" + item.start;
            }));
            setFavoritesList(newList);
            console.log(newList);
        }).catch((e) => {
            alert("Error occured while fetching your favorites. " + e);
        });
    
        getPerson().then((response) => {
            let newList = response.docs.map(doc => doc.data());
            newList = newList.filter(filterUndefined);
            newList.map((item => {
                item.url = item.url + "?start=" + item.start;
            }));
            setPersonList(newList);
        }).catch((e) => {
            alert("Error occured while fetching your favorites. " + e);
        });

        getPerson2().then((response) => {
            let newList = response.docs.map(doc => doc.data());
            newList = newList.filter(filterUndefined);
            newList.map((item => {
                item.url = item.url + "?start=" + item.start;
            }));
            setPerson2List(newList);
        }).catch((e) => {
            alert("Error occured while fetching your favorites. " + e);
        });
    
        getFood().then((response) => {
            let newList = response.docs.map(doc => doc.data());
            newList = newList.filter(filterUndefined);
            newList.map((item => {
                item.url = item.url + "?start=" + item.start;
            }));
            setFoodList(newList);
        }).catch((e) => {
            alert("Error occured while fetching your favorites. " + e);
        });
      }, []);

    return <div className="CustomBody" style={{textAlign:"left"}}>
        <TagView list={favoritesList} name="favorites"/>
        <TagView list={personList} name="anhphu"/>
        <TagView list={person2List} name="alice"/>
        <TagView list={foodList} name="technology"/>;
    </div>;
    
};

function getFavorites() {
    return new Promise((resolve, reject) => {
       db.collection("favorites").get().then((value) => {
            resolve(value);
       }).catch((e) => {
            reject(e);
       })
    })
 }

 function getPerson() {
    return new Promise((resolve, reject) => {
       db.collection("person").get().then((value) => {
            resolve(value);
       }).catch((e) => {
            reject(e);
       })
    })
 }

 function getPerson2() {
    return new Promise((resolve, reject) => {
       db.collection("person2").get().then((value) => {
            resolve(value);
       }).catch((e) => {
            reject(e);
       })
    })
 }

 function getFood() {
    return new Promise((resolve, reject) => {
       db.collection("technology").get().then((value) => {
            resolve(value);
       }).catch((e) => {
            reject(e);
       })
    })
 }

export default Third;