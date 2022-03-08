import React, {useState} from 'react';

const Modal = ({show, onClose, album, children}) => {

    if (!show) {
        return null
    }


  return (
    <div className='modal'>


    {children} 

{album}

<button onClick={onClose}>close</button>   
</div>
  );
};

export default Modal;
