import React from 'react';
import Select from 'react-select';
import { FaEdit } from "react-icons/fa";
import Button from '@mui/material/Button';
import { GoDiffAdded } from "react-icons/go";

const Media = () => {

    const options = [
        { value: 'Daisy', label: 'Daisy' },
        { value: 'John', label: 'John' },
        { value: 'Jake', label: 'Jake' }
      ]

  return (
    <>
     <div >
            <Select options={options}/>
        </div>
        <div style={{ display: "flex", border: "1px solid grey  "}}>
                <Button sx={{ color: "black", fontSize: 25, }}><FaEdit /></Button>
                {/* Map out users information for retrieving type of animal */}
                <p style={{ marginLeft: "2%", marginTop: 10}}><b>Type:</b> Dog</p>
        </div>
        <div>
        <h1 style={{ fontFamily: 'Abel', marginLeft: 10, marginBottom: -10, marginTop: 40, display: "inline-block"}}>Media</h1>
        <Button variant="outlined" sx={{  display: "inline-block", left: "60%",}}><GoDiffAdded style={{color: "black"}}/></Button>
        <hr style={{ width: "95%", marginLeft: 10}}/>
    </div>
    </>
  )
}

export default Media