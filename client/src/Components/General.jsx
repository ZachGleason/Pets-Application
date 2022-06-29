import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react';
import { GoDiffAdded } from "react-icons/go";
import { FaEdit } from "react-icons/fa";
import { FormControl, Input, Select, MenuItem, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";

const General = (props) => {


    const nav = useNavigate();

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

    const update = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/:id`, {
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
    .then((res) => {
        console.log(res);
        console.log(res.data);
        nav("/dashboard");
        window.location.reload(true);
    })
    .catch((err) => {console.log(err)})
    }

    return (
        <div class="container" style={{ width: "100%"}}>
        <div style={{ display: "flex", border: "1px solid grey" }}>
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
        </div>
        <div>
            <h1 style={{ fontFamily: 'Abel', marginLeft: 10, marginBottom: -10, marginTop: 40, display: "inline-block"}}>General</h1>
            <BsPlusLg style={{display: "inline-block", marginLeft: 40, marginTop: -10}} onClick={() => nav(`/animal`)}/>
            <hr style={{ width: "95%", marginLeft: 10}}/>
        </div>
        <form onSubmit={ update }>
            <div style={{ display: "flex"}}>
                <div style={{ width: "46%"}}>
                    <label style={{fontFamily: 'Abel', display: "inline"}}>Name</label>
                    <input type="text" value={pets.name} style={{ml: 1, width: "100%", display: "inline"}} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div style={{ width: "46%", marginLeft: 10}}>
                    <label style={{fontFamily: 'Abel', display: "inline"}}>Breed</label>
                    <input type="text" value={pets.breed} style={{ml: 1, width: "100%", display: "inline"}} onChange={(e) => setBreed(e.target.value)}></input>
                </div>
            </div>
            <div style={{ display: "flex", marginTop: 25}}>
                <div style={{ width: "46%"}}>
                    <label style={{fontFamily: 'Abel', display: "inline"}}>Age</label>
                    <input type="number" value={pets.age} style={{ml: 1, width: "100%", display: "inline"}} onChange={(e) => setAge(e.target.value)}></input>
                </div>
                <div style={{ width: "46%", marginLeft: 10}}>
                    <label style={{fontFamily: 'Abel', display: "inline"}}>Microchip ID</label>
                    <input type="text" placeholder='131213223' style={{ml: 1, width: "100%", display: "inline"}}></input>
                </div>
            </div>
            <div style={{ display: "flex", marginTop: 25}}>
                <div style={{ width: "46%"}}>
                    <label style={{fontFamily: 'Abel', display: "inline"}}>Rescue Date</label>
                    <input type="text" value={pets.rescue_date} style={{ml: 1, width: "100%", display: "inline"}} onChange={(e) => setRescue_date(e.target.value)}></input>
                </div>
                <div style={{ width: "46%", marginLeft: 10}}>
                    <label style={{fontFamily: 'Abel', display: "inline"}}>Date Of Birth</label>
                    <input type="text" value={pets.birth} style={{ml: 1, width: "100%", display: "inline"}} onChange={(e) => setBirth(e.target.value)}></input>
                </div>
            </div>
            <div style={{ display: "flex", marginTop: 25}}>
                <div style={{ width: "46%"}}>
                    <label style={{fontFamily: 'Abel', display: "inline"}}>Parents Name</label>
                    <input type="text" value={pets.rescue_date} style={{ml: 1, width: "100%", display: "inline"}} onChange={(e) => setParents_Name(e.target.value)}></input>
                </div>
                <div style={{ width: "46%", marginLeft: 10}}>
                    <label style={{fontFamily: 'Abel', display: "inline"}}>Allergies</label>
                    <input type="text" value={pets.allergies} style={{ml: 1, width: "100%", display: "inline"}} onChange={(e) => setAllergies(e.target.value)}></input>
                </div>
            </div>
            <div style={{paddingTop: 25, marginTop: 25 }}>
                <input placeholder='Notes' type="text" cols="40" rows="5" style={{width: "95%", height: 92}}></input>
            </div>
            <div style={{ marginTop: 25, justifyContent: "center", alignItems: "center", display: "flex" }}>
            <Button variant="contained" type="submit" sx={{width: "40%", backgroundColor: "black", marginLeft: 1 }}>Update Information</Button>
            </div>
        </form>
    </div>
 )
}

export default General;