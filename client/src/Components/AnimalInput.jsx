import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const AnimalInput = (props) => {

    const nav = useNavigate();

//   useEffect(() => {
//   if (Object.keys(props.user).length === 0) {
//     nav("/");
//   }
// }, []);

const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/pets', {
    name, 
    age,
    breed,
    parents_name,
    allergies,
    notes,
    type_id,
    birth,
    rescue_date,
    users_id: 1
})
    .then(() => nav('/dashboard'))
    .catch(err=>console.log(err))

}

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [breed, setBreed] = useState("");
    const [parents_name, setParents_Name] = useState("");
    const [allergies, setAllergies] = useState("");
    const [notes, setNotes] = useState("");
    const [type_id, setType_id] = useState("");
    const [users_id, setUsers_id] = useState("");
    const [birth, setBirth] = useState("");
    const [rescue_date, setRescue_date] = useState("");
    const [types, setTypes] = useState([]);


    useEffect(() => {
		axios
			.get("http://localhost:8000/api/type")
			.then((res) => {
				console.log(res);
				setTypes(res.data.data);
                console.log(res.data.data)
			})
			.catch((err) => console.log(err));
	}, []);


  return (
    <div>
        <div style={{ marginTop: 100 }}> 
            <Form onSubmit={ submitHandler }>
                    <select
						className="form-control form-select mb-3"
						id="type"
						onChange={(e) => setType_id(e.target.value)}
					>
						<option value="">Select a Type</option>
						{types.map((cat, idx) => {
							return (
								<option value={cat.id} key={cat.id}>
									{cat.name}
								</option>
							);
						})}
					</select>
                    <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlInput1">
                        <Form.Control type="number" placeholder="Age" onChange={(e) => setAge(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Breed" onChange={(e) => setBreed(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control type="text" placeholder='Allergies' onChange={(e) => setAllergies(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control type="text" placeholder='Parents Name' onChange={(e) => setParents_Name(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control type="text" placeholder='Rescue Date' onChange={(e) => setRescue_date(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control type="text" placeholder='Date Of Birth' onChange={(e) => setBirth(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" placeholder='Notes' rows={3} onChange={(e) => setNotes(e.target.value)}/>
                    </Form.Group>
                    <div style={{ justifyContent: "center", alignItems: "center", display: "flex"  }}>
                        <Button type='submit' sx={{backgroundColor: "white !important", color: "black", background: 'none', width: "55%", marginTop: 1, height: 30, justifyContent: "center", alignItems: "center" }}><b>Create Schedule</b></Button>
                    </div>
            </Form>
        </div>
    </div>
  )
}

export default AnimalInput; 