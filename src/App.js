import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Item from './Components/item/item'
import Menu from './Components/Menu/menu'
import FormTaskAndGoal from './Components/Form/form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AddMobileButton from './Components/AddMobileButton/AddMobileButton'
import { useDispatch, useSelector } from 'react-redux';
import {initAddTask } from './reducers/taskSlice';
import { initAddGoal } from './reducers/goalsSlice';
import { useEffect } from 'react';


function App() {
  const tasks =useSelector((state)=> state.tasks.value);
  const option = useSelector((state)=> state.option.value);
  const goals = useSelector((state)=>state.goals.value);
  const dispatch = useDispatch();

  function initFetch(){
      fetch("http://localhost:3001/tasks/getTasks",{
          method:"GET",
          headers:{
              "Content-Type":"application/json",
              "Authorization":"123456"
          }
          })
          .then((response)=>{
            return response.json()
          })
          .then((response)=>{
            response.map((task)=>{
              dispatch(initAddTask(task));
            })
          })
          .catch(err=>{
              console.log(err);
          });

      fetch("http://localhost:3001/goals/getGoals", {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
              "Authorization": "123456"
          }
          })
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then((response)=>{
            response.map((goal)=>{
              dispatch(initAddGoal(goal));
            })
          })
          .catch(err=>{
              console.log(err);
          });

      } 
  useEffect(()=>{
    initFetch();
  },[])

  return(
    <div className='App'>
      <Menu/>
      <Container>
        <Row>
          <Col xs={0} className='d-none d-sm-block d-sm-none d-md-block '><FormTaskAndGoal type={option}/></Col>
          <Col xs={0} sm = {0}>
            <Row className='d-md-none'>
              <div className='bg-transparent overlapping-div'>
                <AddMobileButton className='float-left'/>
              </div>
            </Row>
            <Row>
              <div className='scrolling'>
                {option==='tasks' &&
                  tasks.map((task, index)=>(
                    <Item 
                    type={option} 
                    key={index} 
                    id={task.id} 
                    name={task.name} 
                    description={task.description} 
                    dueDate={task.dueDate}/>
                  ))

                }
                {option==='goals' &&
                  goals.map((goal,index)=>(
                  <Item 
                  type={option} 
                  key={index} 
                  id={goal.id} 
                  name={goal.name} 
                  description={goal.description} 
                  dueDate={goal.dueDate}/>
                  ))
                  }
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
