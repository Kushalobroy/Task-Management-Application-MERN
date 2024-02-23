import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;
      try {
        const res = await axios.get('/api/tasks', { headers: { Authorization: `Bearer ${token}` } });
        setTasks(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"> <h2>Hello, Kushal</h2></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
         
          <button className='signOutBtn' >
                SIGN OUT
            </button>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container className='mt-5'>
    
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Sr. No.</th>
          <th>Task</th>
          <th>Description</th>
          <th colSpan={2} className='text-center'>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td className='text-center'><a href='' className='text-danger'><i class="bi bi-trash"></i></a> </td>
          <td className='text-center'><i class="bi bi-pencil-square"></i></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td className='text-center'><i class="bi bi-trash"></i></td>
          <td className='text-center'><i class="bi bi-pencil-square"></i></td>
        </tr>
        <tr>
          <td>3</td>
          <td >Larry the Bird</td>
          <td>Thornton</td>
          <td className='text-center'><i class="bi bi-trash"></i></td>
          <td className='text-center'><i class="bi bi-pencil-square"></i></td>
        </tr>
      </tbody>
    </Table>
    </Container>
      {/* {tasks.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))} */}
    </div>
  );
};

export default Dashboard;
