
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Item from './Components/item/item'
import Menu from './Components/Menu/menu'
import FormTaskAndGoal from './Components/Form/form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AddMobileButton from './Components/AddMobileButton/AddMobileButton'

function App() {
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
                <Item/>

                <Item/>
                <Item/>
              
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
