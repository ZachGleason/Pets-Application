import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react';
import Select from 'react-select';
import { BsPlusLg } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Axios from 'axios';
import { Modal } from 'react-responsive-modal';
import { useNavigate } from "react-router-dom";

const Schedule = (props) => {

    const nav = useNavigate();

//   useEffect(() => {
//   if (Object.keys(props.user).length === 0) {
//     nav("/");
//   }
// }, []);


    const [scheduling, setScheduling] = useState([]);


      useEffect(() => {
          axios
          .get('http://localhost:8000/api/tasks/pet/' + props.pet_id)
          .then((res) => setScheduling(res.data.data)) 
          .catch((err) => console.log(err))
      })


  return (
      <div>
    <div className="container">
    <div style={{ display: "flex", border: "1px solid grey  "}}>
        <Button sx={{ color: "black", fontSize: 25, }}><FaEdit /></Button>
    </div>
    <div>
        <h1 style={{ fontFamily: 'Abel', marginLeft: 10, marginBottom: -10, marginTop: 40, display: "inline-block"}}>Schedule</h1>
        <BsPlusLg style={{display: "inline-block", marginLeft: 40, marginTop: -10}} onClick={() => nav(`/scheduling/${props.pet_id}`)}/>
        <hr style={{ width: "95%", marginLeft: 10}}/>
    </div>
    <div style={{height: 480, overflow: "scroll"}}>
        {/* Map out all of the scheduled boxes for the selected pet */}
          {scheduling.map((info, idx) => {
            return (
             <div style={{ width: "95%", height: 160, border: "1px solid black", borderRadius: 15, marginLeft: 10, marginTop: 8 }} key="idx">
                <p>{info.name}</p>
                <p>{info.time}</p>
                <p>{info.frequency}</p>
              </div>
          )})}
        </div>
    </div>
    </div>
  )
}

export default Schedule;