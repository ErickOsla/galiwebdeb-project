import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss';

function Item(props) {
    return(
        <Card >
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text className='fw-bold'>
                    Descripcion
                </Card.Text>
                <Card.Text>
                    {props.descripcion}
                </Card.Text>
                <Card.Text className='fw-bold'>
                    Due Date
                </Card.Text>
                <Card.Text>
                    {props.dueDate}
                </Card.Text>
                <Card.Body>
                    <Button variant='info'>Editar</Button>
                    <Button variant='info'>Eliminar</Button>
                </Card.Body>
            </Card.Body>
        </Card>
    );
}


export default Item;