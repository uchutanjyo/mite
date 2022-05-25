import React, {useState} from 'react';
// import Main from './Main'
import Main from './components/Main'
import Modal from './components/Modal'
import data from './components/data'
import Albums from './components/Albums'




const Music = () => {

  const [show, setShow] = useState(false);
  const [albums, setAlbums] = useState(data);
  console.log(albums)


    
  return (
    <>
    <Modal onClose={()=> {setShow(false)}} show={show}>
</Modal>
    <Main>
 

      <h1 className='header'>Official Mite Releases</h1>

           <div className='albums'>
            <Albums  albums={albums} />
            
            </div>

    </Main>
    </>
  );
};

export default Music;
