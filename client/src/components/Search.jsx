import React, { useState } from 'react';
import {
  Container,
  Form,
  FormControl,
  InputGroup,
  Button
} from 'react-bootstrap';

const Search = ({ history }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    history.push(`/results/${searchTerm}`);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <InputGroup className="city">
            <FormControl
              type="text"
              placeholder="Search by city"
              onChange={handleChange}
            />
            <Button variant="primary" type="submit">
              Search
            </Button>
          </InputGroup>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Search;
