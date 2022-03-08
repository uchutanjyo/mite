import React, {useState} from 'react';
import Modal from './Modal'

const Albums = ({albums}) => {
const [albumId, setAlbumId] = useState('')
  const [show, setShow] = useState(false);
  const [album, setAlbum] = useState('')


 const handleClick = event => {
    const clicked = event.target.id
    const filterId = albums.filter(album => album.id == clicked )
        setAlbumId(filterId[0].id)
      setShow(true)
  }
  
    return (
    <>

 <Modal  show={show} album={album}>
{albums.map((album) => {
const {id, title, release, info, image, onClose} = album;
   if( album.id == albumId ) {
return (
<div className="modal-album"key={id}> 
<h2 className='modal-album-title'>{title}</h2>
<div className='modal-album-release'>{release}</div>
<img src={image} alt={title} />
<div className='modal-album-info'>{info}</div>
<button onClick={() => setShow(false)}>close</button>   

</div>
)}
})}
</Modal>

{albums.map((album) => {
const {id, title, release, info, image} = album;
return (
<div className="album"key={id}> 
<img src={image} id={id} alt="" onClick={handleClick} />
<h6 className='.album-title'>{title}</h6>
<div className='.album-title'>{release}</div>
</div>

)
})}

</>
    )
}

export default Albums;