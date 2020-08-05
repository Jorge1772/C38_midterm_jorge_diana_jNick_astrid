import React, { useState } from 'react';
import {
  Container,
  Form,
  FormControl,
  InputGroup,
  Button
} from 'react-bootstrap';
import Footer from './Footer';
import Carousel from './Carousel';

//setting up or search form and setting the user input with useState

const Search = ({ history }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    history.push(`/results/${searchTerm}`);
  };

  return (
    <>
      <Container className=" d-flex flex-column align-items-center">
        <Carousel />
        <Form onSubmit={handleSubmit} style={{ width: '50vw' }}>
          <Form.Group>
            <InputGroup className="city">
              <FormControl
                type="text"
                placeholder="Search by city"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="primary" type="submit" className="search-button">
                Search
              </Button>
            </InputGroup>
          </Form.Group>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default Search;
