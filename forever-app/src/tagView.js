import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';


export function TagView (props) {
    return (
        <div className="TagView">
        <h1 style={{paddingLeft:"25px"}}>
            {props.name}
        </h1>
        <ScrollMenu>
            {props.list.map((element) => (
                element.url ? <div className='VidCard' key={element.key}>
                    <iframe width="336" height="189" src={element.url} title="YouTube video player" padding="50" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div> : <div>Something</div> 
            ))}
        </ScrollMenu>
        </div>
      );
}