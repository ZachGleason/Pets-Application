import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react';
import { GoDiffAdded } from "react-icons/go";
import { FaEdit } from "react-icons/fa";
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";

const General = (props) => {


    // const nav = useNavigate();

    // useEffect(() => {
	// 	if (Object.keys(props.user).length === 0) {
	// 		nav("/");
	// 	}
	// }, []);

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
    const [pets, setPets] = useState([]);

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

    useEffect(() => {
		axios
			.get("http://localhost:8000/api/pets/user/1")
			.then((res) => {
				console.log(res);
				setPets(res.data.data[0]);
                props.setPet_id(res.data.data[0].id)
                console.log(res.data.data[0])
			})
			.catch((err) => console.log(err));
	}, []);

    return (
        <div class="container" >
        <div style={{ display: "flex", border: "1px solid grey  "}}>
                <select
						className="form-control form-select"
						id="type"
						onChange={(e) => setType_id(e.target.value)}
					>
						<option value="">Select a Category</option>
						{types.map((cat, idx) => {
							return (
								<option value={cat.id} key={cat.id}>
									{cat.name}
								</option>
							);
						})}
					</select>
                <Button sx={{ color: "black", fontSize: 25, }}><FaEdit /></Button>
        </div>
        <div>
            <h1 style={{ fontFamily: 'Abel', marginLeft: 10, marginBottom: -10, marginTop: 40}}>General</h1>
            <hr style={{ width: "95%", marginLeft: 10}}/>
        </div>
        <div>
            <TextField id="outlined-basic" type="text" label="test" sx={{ml: 1, width: "46%"}} value={pets.name}/>
            <TextField id="outlined-basic" type="text"  variant="outlined" sx={{ml: 1, width: "46%"}} value={pets.breed}/>
        </div>
        <div style={{marginTop: 50}}>
            <TextField id="outlined-basic" type="number" variant="outlined" sx={{ml: 1, width: "46%"}} value={pets.age}/>
            <TextField id="outlined-basic"  type="number" label="Microchip ID" variant="outlined" sx={{ml: 1, width: "46%"}} />
        </div>
        <div style={{marginTop: 50}}>
            <TextField id="outlined-basic" type="text" variant="outlined" sx={{ml: 1, width: "46%"}} value={pets.rescue_date}/>
            <TextField id="outlined-basic" type="text" variant="outlined" sx={{ml: 1, width: "46%"}} value={pets.birth}/>
        </div>
        <div style={{marginTop: 50}}>
            <TextField id="outlined-basic" type="text" variant="outlined" sx={{ml: 1, width: "46%"}} value={pets.parents_name}/>
            <TextField id="outlined-basic" type="text" label="Notes" variant="outlined" sx={{ml: 1, width: "46%"}}/>
        </div>
        <div style={{marginTop: 10, marginLeft: 55}}>
            <input placeholder='Notes' type="text" cols="40" rows="5" style={{width: "85%", height: 92}}></input>
        </div>
        </div>
 )
}

export default General;