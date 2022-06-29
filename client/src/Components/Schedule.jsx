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
import { useNavigate } from "react-router-dom";
import '../App.css'

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
    <div>
        <h1 style={{ fontFamily: 'Abel', marginLeft: 10, marginBottom: -10, marginTop: 40, display: "inline-block"}}>Schedule</h1>
        <BsPlusLg style={{display: "inline-block", marginLeft: 40, marginTop: -10}} onClick={() => nav(`/scheduling/${props.pet_id}`)}/>
        <hr style={{ width: "95%", marginLeft: 10}}/>
    </div>
    <div style={{height: 480, overflow: "scroll"}}>
        {/* Map out all of the scheduled boxes for the selected pet */}
          {scheduling.map((info, idx) => {
            return (
             <div style={{ width: "95%", height: 110, border: "1px solid black", borderRadius: 15, marginLeft: 10, marginTop: 8, alignItems: "center", justifyContent: "center" }} key="idx">
                <div style={{ marginLeft: 15, display: "inline-block", maxWidth: "100%"}}>
                    <div>
                        <p style={{ display: "inline-block", marginLeft: 5}}><b>Task:</b> {info.name}</p>
                        <p style={{ display: "inline-block", marginLeft: 20}}><b>Time:</b> {info.time}</p>
                        <p style={{ display: "inline-block", marginLeft: 20}}><b>Frequency:</b> {info.frequency}</p>
                    </div>
                    <div style={{ display: "inline-block"}}>
                        <label style={{ alignContent: "center", marginLeft: 20}}>
                            Daily
                            <input type="checkbox" className='checkmark' style={{ marginLeft: 10}}></input>  
                        </label>
                        <label style={{ alignContent: "center", marginLeft: 20, textAlign: "center"}}>
                            Completed
                            <input type="checkbox" className='checkmark' style={{ marginLeft: 10}}></input>  
                        </label>
                    </div>
                    <Button sx={{ color: "black", fontSize: 25, marginTop: -3}} ><FaEdit /></Button>
                </div>
              </div>
          )})}
        </div>
    </div>
    </div>
  )
}

export default Schedule;