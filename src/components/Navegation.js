import React from 'react';
import "./Navegation.css"
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'

function Navegation() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <h3 className="item">Weather Website</h3>
                <p className="item">Current City Name and temp</p>
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search City"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navegation;