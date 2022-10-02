import React from "react";
import { TagView } from "./tagView";
//Functional Component 

const Third = () => {
    const list = [
        {
            "url":"https://www.youtube.com/embed/NrM715M8vpU?start=10",
            "key":"0"
        },
        {
            "url":"https://www.youtube.com/embed/NrM715M8vpU?start=10",
            "key":"1"
        },
        {
            "url":"https://www.youtube.com/embed/NrM715M8vpU?start=10",
            "key":"0"
        },
        {
            "url":"https://www.youtube.com/embed/NrM715M8vpU?start=10",
            "key":"0"
        },
        {
            "url":"https://www.youtube.com/embed/NrM715M8vpU?start=10",
            "key":"0"
        },
    ]

    return <div>
        <TagView list={list} name="Favorites"/>
        <TagView list={list} name="Michael"/>
        <TagView list={list} name="Food"/>;
    </div>;
    
};

export default Third;