
import Card from 'react-bootstrap/Card';

function Cards (){
    return(
        <div>
            
      <Card>
        <Card.Img variant="top" src="/bogota@2x.png"  style={{height:"230px",width:"400px"}}/>
        <Card.Body>
          <Card.Title>Card title1</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
       
      </Card>
     
        </div>
    )
}
export default Cards