import React, { useState } from 'react';
import {
  Container,
  Form,
  FormControl,
  InputGroup,
  Button
} from 'react-bootstrap';
import Carousel from './Carousel'

const Search = ({ history }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();


    history.push(`/results/${city}`);
  }
  render() {
    return (

      <Container className=" d-flex flex-column align-items-center">
        <Carousel />
        <Form onSubmit={(e) => this.handleSubmit(e)} style={{width:"50vw"}}>
          <Form.Group>
            <InputGroup className="city">
              <FormControl type="text" placeholder="Search by city" className="search-bar" />
              <Button variant="primary" type="submit" className="search-button">
                Search
              </Button>
            </InputGroup>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default Search;
