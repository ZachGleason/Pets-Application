import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'

const ScheduleForm = (props) => {

    const nav = useNavigate();


    const submitHandler = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/tasks', {
        isDaily: 0,
        isCompleted: 0,
        name, 
        time,
        frequency,
        pets_id: petid,

    })
        .then(() => nav('/dashboard'))
        .catch(err=>console.log(err))
    
    }


    const {petid} = useParams()
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [frequency, setFrequency] = useState("");

    

//     const nav = useNavigate();

//   useEffect(() => {
//   if (Object.keys(props.user).length === 0) {
//     nav("/");
//   }
// }, []);

  return (
    <div>
        <div style={{ marginTop: 100 }}> 
            <Form onSubmit={ submitHandler }>
                    <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Task Name" onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Time" onChange={(e) => setTime(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Frequency" onChange={(e) => setFrequency(e.target.value)}/>
                    </Form.Group>
                    <div style={{ justifyContent: "center", alignItems: "center", display: "flex"  }}>
                        <Button type='submit' sx={{backgroundColor: "white !important", color: "black", background: 'none', width: "55%", marginTop: 1, height: 30, justifyContent: "center", alignItems: "center" }}><b>Create Schedule</b></Button>
                    </div>
            </Form>
        </div>
    </div>
  )
}

export default ScheduleForm; 