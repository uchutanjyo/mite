import React from 'react';


const Modal = ({show, onClose, id, title, release, info, image, children}) => {

    if (!show) {
        return null
    }
  return (
    <div className='modal'>
    {children} 
<button onClick={onClose}>lose modal</button>   

</div>
  );
};

export default Modal;
