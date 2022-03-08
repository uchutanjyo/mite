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
 

      <h1 className='header'>Music</h1>

           <div className='albums'>
            <Albums  albums={albums} />
            
            </div>

              <button className='button' onClick={() => setShow(true)}  show={show}>oepn</button>

    </Main>
    </>
  );
};

export default Music;
