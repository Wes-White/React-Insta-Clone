import React from 'react';
import './SearchBar.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function SearchBar(props) {
    return (  
        <div className='search-bar'>
            <Navbar sticky='top' bg="light" variant="light">
            <Navbar.Brand href="#home"><img className='logo' src="https://img.icons8.com/plasticine/100/000000/instagram.png" alt='logo'></img></Navbar.Brand>
            <img className='writing' src={require('../../Images/instalogo.png' )}  alt='writingLogo'></img>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
             <Button variant="outline-primary">Search</Button>
             </Form>
            <Nav className="mr-auto, icons">
      <Nav.Link href="#location"><img src="https://img.icons8.com/ios/32/000000/compass.png" alt='compass'></img></Nav.Link>
      <Nav.Link href="#heart"><img src="https://img.icons8.com/windows/32/000000/hearts.png" alt='heart'></img></Nav.Link>
      <Nav.Link href="#user"><img src="https://img.icons8.com/ios/32/000000/gender-neutral-user.png" alt='user'></img></Nav.Link>
    </Nav>
    
  </Navbar>
            
        </div>

    );
}
 
export default SearchBar;


