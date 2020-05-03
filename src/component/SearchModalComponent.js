import React, { useState } from 'react';
import { Button, Modal, ModalHeader } from 'reactstrap';
import SearchInput from './SearchInputComponent';

const SearchModal = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeBtn = (
    <button className='close' onClick={toggle}>
      &times;
    </button>
  );

  return (

      <div className='search-modal-component'>
        <Button color='danger' onClick={toggle}>
          <i className='fa fa-search'></i>
        </Button>
        <Modal isOpen={modal} toggle={toggle} className='search-modal modal-lg'>
          <ModalHeader classname='d-flex align-items-center'  toggle={toggle} close={closeBtn}>
            <SearchInput />
          </ModalHeader>
        </Modal>
      </div>
  );
};

export default SearchModal;
