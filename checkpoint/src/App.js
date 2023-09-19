
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Card from 'react-bootstrap/Card';


function App() {
  return (
    <Card>
    <Card.Header>Quote</Card.Header>
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante.{' '}
        </p>
        <footer className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
    </Card.Body>
  </Card>
  );
}

export default App;