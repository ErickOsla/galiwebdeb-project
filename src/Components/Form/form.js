import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './form.scss'

function FormTaskAndGoal(){
    return(
        <div className='space'>
            <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder="" />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                <Form.Label>Descripcion</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                <Form.Label>Due Date</Form.Label>
                <Form.Control type='date' placeholder='name@example.com' />
            </Form.Group>
            <Button variant='info'>Add Goal</Button>
            </Form>
        </div>
    )
}

export default FormTaskAndGoal;