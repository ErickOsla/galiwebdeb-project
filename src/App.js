import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Item from './Components/item/item'
import Menu from './Components/Menu/menu'
import FormTaskAndGoal from './Components/Form/form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AddMobileButton from './Components/AddMobileButton/AddMobileButton'
import { useSelector } from 'react-redux';

const list = [
  {
    'name': 'Ganar Curso',
    'descripcion': 'Ganar curso de desarrollo web',
    'dueDate': '26-04-24'
  },
  {
    'name': 'Ganar Curso',
    'descripcion': 'Ganar curso de desarrollo web',
    'dueDate': '26-04-24'
  }
]

function App() {
  const goals = useSelector((state)=>state.goals.value);
  return(
    <div className='App'>
      <Menu/>
      <Container>
        <Row>
          <Col xs={0} className='d-none d-sm-block d-sm-none d-md-block '><FormTaskAndGoal/></Col>
          <Col xs={0} sm = {0}>
            <Row className='d-md-none'>
              <div className='bg-transparent overlapping-div'>
                <AddMobileButton className='float-left'/>
              </div>
            </Row>
            <Row>
              <div className='scrolling'>
                {goals.map((task,index)=>(
                  <Item key={index} name={task.name} descripcion={task.descripcion} dueDate={task.dueDate}/>
                ))}
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
