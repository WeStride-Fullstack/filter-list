import React from "react";
import { Form, Button } from "react-bootstrap";

const SearchBar = () => {
  return (
    <Form className="d-flex w-50">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
};

export default SearchBar;
