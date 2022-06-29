import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import DashboardNav from '../Components/DashboardNav';
import Tabs from '../Components/Overview';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';


function OwnerProfile() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const { id } = useParams();
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/users/${id}`)
            .then((res) => {
                console.log('User', res.data);
                setName(res.data.name);
                setLastName(res.data.lastName);
                setEmail(res.data.email);
                setPhoneNumber(res.data.phoneNumber);
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
                name,
                lastName,
                email,
                phoneNumber,
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
                <InputLabel htmlFor="my-input">Name:</InputLabel>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <br/>
                <InputLabel htmlFor="my-input">Last Name:</InputLabel>
                <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <br/>
                <InputLabel htmlFor="my-input">Email:</InputLabel>
                <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br/>
                <InputLabel htmlFor="my-input">Phone Number:</InputLabel>
                <Input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <br/>
                <Button variant="outlined">Update</Button>
                </FormControl>
                );
                </div>
            </div>
        );
        </div>
        )
}


export default OwnerProfile;


