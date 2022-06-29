import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react';
import Select from 'react-select';
import { FaEdit } from "react-icons/fa";
import Button from '@mui/material/Button';
import { GoDiffAdded } from "react-icons/go";
const [name, setName] = useState(" ");
const [selectedFile, setSelectedFile] = useState(null);

const Media = () => {

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
        <h1 style={{ fontFamily: 'Abel', marginLeft: 10, marginBottom: -10, marginTop: 40, display: "inline-block"}}>Media</h1>
        <Button variant="outlined" sx={{  display: "inline-block", left: "60%",}}><GoDiffAdded style={{color: "black"}}/></Button>
        <hr style={{ width: "95%", marginLeft: 10}}/>
        <form>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="file" value={selectedFile} onChange = {(e) => setSelectedFile(e.target.files[0])} />
      </form>
    </div>
    </div>
  ),)}
  </div>
  )
}

export default Media