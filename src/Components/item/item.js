import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss';
import { removeTask } from '../../reducers/taskSlice';
import { removeGoal } from '../../reducers/goalsSlice';
import { useDispatch } from 'react-redux';
import { removeListener } from '@reduxjs/toolkit';

function Item(props) {
    const dispatch = useDispatch();

    const removeItem = () => {
        if (props.type === 'tasks') {
            console.log("item task id:")
            console.log(props.id)
            dispatch(removeTask(props.id));
        } else if (props.type === 'goals') {
            console.log("item goal id:")
            console.log(props.id)
            dispatch(removeGoal(props.id));
        }
    };

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
                    <Button variant='info' onClick={removeItem}>Eliminar</Button>
                </Card.Body>
            </Card.Body>
        </Card>
    );
}


export default Item;