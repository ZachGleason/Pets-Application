import React from 'react';
import Select from 'react-select';
import { FaEdit } from "react-icons/fa";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { FormControlLabel } from '@mui/material/FormControlLabel';
import axios from 'axios';

const Schedule = () => {

    const options = [
        { value: 'Daisy', label: 'Daisy' },
        { value: 'John', label: 'John' },
        { value: 'Jake', label: 'Jake' }
      ]
    const {id} = useParams();
    console.log('ID', id);
    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/schedule/${id}`)
        .then((res) => {
        console.log('User', res.data);
        setUser(res.data);
        })
        .catch((err) => {
        console.log(err);
        });
    }, []);

  return (
    <div className="container">
        {users.map((user) => (
            <div className="user" key={user._id}>
            <Select options={options}/>
    <div style={{ display: "flex", border: "1px solid grey  "}}>
        <Button sx={{ color: "black", fontSize: 25, }}><FaEdit /></Button>
        <p style={{ marginLeft: "2%", marginTop: 10}}><b>Type:</b> Dog</p>
    </div>
    <div>
        <h1 style={{ fontFamily: 'Abel', marginLeft: 10, marginBottom: -10, marginTop: 40}}>Schedule</h1>
        <hr style={{ width: "95%", marginLeft: 10}}/>
    </div>
    <div style={{height: 480, overflow: "scroll"}}>
        {/* Map out all of the scheduled boxes for the selected pet */}
        <div style={{ width: "95%", height: 160, border: "1px solid black", borderRadius: 15, marginLeft: 10, marginTop: 8 }}>
        <TextField id="standard-basic" label="Task:" variant="standard" sx={{mb:1, ml:5, mt:-1}} />
        <br/>
        <TextField id="standard-basic" label="Time:" variant="standard" sx={{mb:1, ml:5, mt:-1}}/>
        <br/>
        <TextField id="standard-basic" label="Frencuency:" variant="standard" sx={{mb:1, ml:5, mt:-1}}/>
        <FormControlLabel sx={{mt:2, ml:30, mt:-1, width: "30%"}} control={
        <Checkbox defaultChecked />
        }
        label="Completed" />
        <br/>
        <FormControlLabel sx={{mt:-28, ml: 56, width: "30%"}} control={
        <Checkbox defaultChecked />
        }
        label="Daily" />

        </div>
        <div style={{ width: "95%", height: 160, border: "1px solid black", borderRadius: 15, marginLeft: 10, marginTop: 8 }}>
        <TextField id="standard-basic" label="Task:" variant="standard" sx={{mb:1, ml:5, mt:-1}} />
        <br/>
        <TextField id="standard-basic" label="Time:" variant="standard" sx={{mb:1, ml:5, mt:-1}}/>
        <br/>
        <TextField id="standard-basic" label="Frencuency:" variant="standard" sx={{mb:1, ml:5, mt:-1}}/>
        <FormControlLabel sx={{mt:2, ml:30, mt:-1, width: "30%"}} control={
        <Checkbox defaultChecked />
        }
        label="Completed" />
        <br/>
        <FormControlLabel sx={{mt:-28, ml: 56, width: "30%"}} control={
        <Checkbox defaultChecked />
        }
        label="Daily" />

        </div>
        <div style={{ width: "95%", height: 160, border: "1px solid black", borderRadius: 15, marginLeft: 10, marginTop: 8 }}>
        <TextField id="standard-basic" label="Task:" variant="standard" sx={{mb:1, ml:5, mt:-1}} />
        <br/>
        <TextField id="standard-basic" label="Time:" variant="standard" sx={{mb:1, ml:5, mt:-1}}/>
        <br/>
        <TextField id="standard-basic" label="Frencuency:" variant="standard" sx={{mb:1, ml:5, mt:-1}}/>
        <FormControlLabel sx={{mt:2, ml:30, mt:-1, width: "30%"}} control={
        <Checkbox defaultChecked />
        }
        label="Completed" />
        <br/>
        <FormControlLabel sx={{mt:-28, ml: 56, width: "30%"}} control={
        <Checkbox defaultChecked />
        }
        label="Daily" />

        </div>
        <div style={{ width: "95%", height: 160, border: "1px solid black", borderRadius: 15, marginLeft: 10, marginTop: 8 }}>
        <TextField id="standard-basic" label="Task:" variant="standard" sx={{mb:1, ml:5, mt:-1}} />
        <br/>
        <TextField id="standard-basic" label="Time:" variant="standard" sx={{mb:1, ml:5, mt:-1}}/>
        <br/>
        <TextField id="standard-basic" label="Frencuency:" variant="standard" sx={{mb:1, ml:5, mt:-1}}/>
        <FormControlLabel sx={{mt:2, ml:30, mt:-1, width: "30%"}} control={
        <Checkbox defaultChecked />
        }
        label="Completed" />
        <br/>
        <FormControlLabel sx={{mt:-28, ml: 56, width: "30%"}} control={
        <Checkbox defaultChecked />
        }
        label="Daily" />
        </div>
    </div>
    </div>
        ),)}
        </div>
  )
}

export default Schedule;