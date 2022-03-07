import React from 'react';

const ModalAlbums = ({albums}) => {
    return (
    <>
    
{albums.map((album) => {
const {id, title, release, info, image} = album;
return (
<div className="album"key={id}>
    <h1>{title}</h1>
    <h3>{release}</h3>
    <div>{info}</div>
    <img src='https://f4.bcbits.com/img/a2199513628_2.jpg' />
    </div>
)
})}

</>
    )
}

export default ModalAlbums;