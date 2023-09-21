
import Form from 'react-bootstrap/Form';

function Formulaire(){
    return(
     <>
    <Form.Select size="lg">
        <option>Large select</option>
      </Form.Select>
      <br />
      <Form.Select>
        <option>Default select</option>
      </Form.Select>
      </>
    )
}

export default Formulaire