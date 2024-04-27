import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss';

function Item() {
    return(
        <Card >
            <Card.Body>
                <Card.Title>Proyecto WebDeb</Card.Title>
                <Card.Text className='fw-bold'>
                    Descripcion
                </Card.Text>
                <Card.Text>
                    Elaborar una fase del proyecto
                </Card.Text>
                <Card.Text className='fw-bold'>
                    Due Date
                </Card.Text>
                <Card.Text>
                    31/04/2024
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