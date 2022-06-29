import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import DashboardNav from '../Components/DashboardNav';
import Tabs from '../Components/Overview';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';


function OwnerProfile() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''), 
    const { id } = useParams();
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/users/${id}`)
            .then((res) => {
                console.log('User', res.data);
                setUsername(res.data.username);
                setEmail(res.data.email);
                setPassword(res.data.password);
            })
            .catch((err) => {
                console.log(err);
            });
        }, []);

        const navigate = useNavigate();
        const submitHandler = (e) => {
            e.preventDefault();
            axios
            .put(`http://localhost:8000/api/users/${id}`, {
                usernname,
                email,
                password
            })
            .then((res) => {
                navigate('/');
            })
            .catch((err) => {
                console.log('ERROR', err);
            });
        };
    return (
        <div className="container">
            <Select options={options}/>

            <div style={{ display: "flex", border: "1px solid grey  "}}>
                <Button sx={{ color: "black", fontSize: 25, }}><FaEdit /></Button>
                <p style={{ marginLeft: "2%", marginTop: 10}}><b>Type:</b> Dog</p>
            </div>
            <div>
                <h1 style={{ fontFamily: 'Abel', marginLeft: 10, marginBottom: -10, marginTop: 40}}>Profile</h1>
                <hr style={{ width: "95%", marginLeft: 10}}/>
            </div>
            <div style={{height: 300, overflow: "scroll"}} >
                <div style={{ width: "95%", height: 300, border: "1px solid black", borderRadius: 15, marginLeft: 10, marginTop: 8 }}>
                <FormControl onsubmit={submitHandler}>
                <InputLabel htmlFor="my-input">Username:</InputLabel>
                <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <br/>
                <InputLabel htmlFor="my-input">Email:</InputLabel>
                <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br/>
                <InputLabel htmlFor="my-input">Password:</InputLabel>
                <Input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br/>
                <Button variant="outlined">Update Profile</Button>
                </FormControl>
                );
                </div>
            </div>
        );
        </div>
        )
}

export default OwnerProfile;


