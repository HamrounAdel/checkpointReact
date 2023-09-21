
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from 'react-bootstrap/Card';
import Navigation from './composants/Navigation';
import Formulaire from './composants/Formulaire';
import Cards from './composants/cards';

function App() {
  return (
    <div>
       <Navigation/>
      <Formulaire/>
      <br />
      <Cards/>
      <Cards/>
    <Card className="text-center">
      <Card.Footer className="text-muted"> footer   </Card.Footer>
    </Card>
    
  </div>
  );
}

export default App;
