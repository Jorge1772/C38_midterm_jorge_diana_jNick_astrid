import React from "react";
import {Container, Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import axios from 'axios';

class Search extends React.Component {
  handleSubmit(event){
    event.preventDefault();
    const city = event.target.elements[0].value;
    axios.get(`http://localhost:8080/api/places?query=${city}`)
      .then((res) =>{
        this.props.data.push(res.data.results);
        });
  }
  render(){
    return(
      <Container>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Group>
            <InputGroup className="city">
              <FormControl
                type="text"
                placeholder="Search by city" />
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


