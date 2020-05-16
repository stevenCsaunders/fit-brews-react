import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const SearchInput = () => {
  return (
    <div>
      <Form className='d-flex align-items-center'>
        <i className='fa fa-search pl-1 pr-3'></i>
        <FormGroup className=''>
          <Label for='searchForm'></Label>
          <Input
            type='text'
            name='search'
            id='searchForm'
            placeholder='Search for your favorite drinks'
          />
        </FormGroup>
      </Form>
    </div>
  );
};

export default SearchInput;
