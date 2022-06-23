import React from 'react';
import Select from 'react-select'
import { GoDiffAdded } from "react-icons/go";

const General = () => {

    const options = [
        { value: 'Daisy', label: 'Daisy' },
        { value: 'John', label: 'John' },
        { value: 'Jake', label: 'Jake' }
      ]
    
  return (
        <div style={{width: "100%", display: "flex", marginLeft: 10,}}>
            <Select options={options} />
            <div style={{ display: "inline-flex",  }}>
                {/* Map out users information for retrieving, type of animal, phone, & email */}
                {/* <p className='left'>Type: Dog</p>
                <p className='left'>Phone: 123-123-123  </p>
                <p className='left'>Email: John@gmail.com</p> */}
            </div>
            <GoDiffAdded fontSize={30} />
        </div>
  )
}

export default General