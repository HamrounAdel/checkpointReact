
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

import CardGroup from 'react-bootstrap/CardGroup';

function App() {
  return (
    <div>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br></br>
      <br></br>
      <Form.Select size="lg">
        <option>Large select</option>
      </Form.Select>
      <br />
      <Form.Select>
        <option>Default select</option>
      </Form.Select>
      <br />
     
      
      <CardGroup>
      <Card>
        <Card.Img variant="top" src="/bogota@2x.png" />
        <Card.Body>
          <Card.Title>Card title1</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="/bologna.png" />
        <Card.Body>
          <Card.Title>Card title2</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
       <br/>
      </Card>
      <Card>
        <Card.Img  src="/curitiba.png" />
        <Card.Body>
          <Card.Title>Card title3</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
    <br></br>
    <br></br>
    <Card className="text-center">
      <Card.Footer className="text-muted"> footer   </Card.Footer>
    </Card>
    
  </div>
  );
}

export default App;
