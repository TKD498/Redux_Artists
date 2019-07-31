import React from 'react';
import {Link} from 'react-router-dom';

export default function ArtistList(props){
    return (
        <div className="artist_container">
            {props.artists.map( item =>(
                <Link to={`/artist/${item.id}`} key={item.id} className="artist_item" >
                <div className="cover" style={{
                    background : `url(/images/${item.cover})`
                }}>
                    <div>
                        {item.name}
                    </div>
                </div>
                </Link>
            ))}
        </div>
    )
}