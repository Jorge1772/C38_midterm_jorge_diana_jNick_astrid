import React from 'react';
import {
  Container,
  Form,
  FormControl,
  InputGroup,
  Button
} from 'react-bootstrap';

class Search extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const { history } = this.props;
    const city = event.target.elements[0].value;

    history.push(`/results/${city}`);
  }
  render() {
    return (
      <Container>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Group>
            <InputGroup className="city">
              <FormControl type="text" placeholder="Search by city" />
              <Button variant="primary" type="submit">
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
