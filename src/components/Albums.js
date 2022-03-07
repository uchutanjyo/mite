import React from 'react';

const Albums = ({albums}) => {
    return (
    <>
    
{albums.map((album) => {
const {id, title, release, info, image} = album;
return (

<div className="album"key={id}> 
<img src={image} alt="" />
<h6 className='.album-title'>{title}</h6>
<div className='.album-title'>{release}</div>


</div>

)
})}

</>
    )
}

export default Albums;