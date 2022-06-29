import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react';
import Select from 'react-select';
import { GoDiffAdded } from "react-icons/go";
import { FaEdit } from "react-icons/fa";
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const General = () => {

    const options = [
        { value: 'Daisy', label: 'Daisy' },
        { value: 'John', label: 'John' },
        { value: 'Jake', label: 'Jake' }
      ]

      const {id} = useParams();
      console.log('ID', id);
      useEffect(() => {
        axios
        .get(`http://localhost:8000/api/general/${id}`)
        .then((res) => {
        console.log('User', res.data);
        setUser(res.data);
        })
        .catch((err) => {
        console.log(err);
        });
    }, []);

    return (
        <div class="container" >
            {users.map((user) => (
                <div className="user" key={user._id}>
            <Select options={options}/>
        <div style={{ display: "flex", border: "1px solid grey  "}}>
                <Button sx={{ color: "black", fontSize: 25, }}><FaEdit /></Button>
                
                <p style={{ marginLeft: "2%", marginTop: 10}}><b>Type:</b> Dog</p>
        </div>
        <div>
            <h1 style={{ fontFamily: 'Abel', marginLeft: 10, marginBottom: -10, marginTop: 40}}>General</h1>
            <hr style={{ width: "95%", marginLeft: 10}}/>
        </div>
        <div>
            <TextField id="outlined-basic" type="text" label="Name" variant="outlined" sx={{ml: 1, width: "46%"}}/>
            <TextField id="outlined-basic" type="text" label="Breed Type" variant="outlined" sx={{ml: 1, width: "46%"}}/>
        </div>
        <div style={{marginTop: 50}}>
            <TextField id="outlined-basic" type="number" label="Age" variant="outlined" sx={{ml: 1, width: "46%"}}/>
            <TextField id="outlined-basic"  type="number" label="Microchip ID" variant="outlined" sx={{ml: 1, width: "46%"}}/>
        </div>
        <div style={{marginTop: 50}}>
            <TextField id="outlined-basic" type="text" label="Rescue Date" variant="outlined" sx={{ml: 1, width: "46%"}}/>
            <TextField id="outlined-basic" type="text" label="Date Of Birth" variant="outlined" sx={{ml: 1, width: "46%"}}/>
        </div>
        <div style={{marginTop: 50}}>
            <TextField id="outlined-basic" type="text" label="Parents Name" variant="outlined" sx={{ml: 1, width: "46%"}}/>
            <TextField id="outlined-basic" type="text" label="Descripion" variant="outlined" sx={{ml: 1, width: "46%"}}/>
        </div>
        <div style={{marginTop: 10, marginLeft: 55}}>
            <input placeholder='Notes' type="text" cols="40" rows="5" style={{width: "85%", height: 92}}></input>
        </div>
        </div>
  ),)}
  </div>
  )
}

export default General;