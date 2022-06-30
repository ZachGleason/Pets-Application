import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import General from './General';
import Schedule from '../Components/Schedule';
import { useNavigate } from "react-router-dom";

const Overview = (props) => {

  const [pet_id, setPet_id] = useState("");

//   const nav = useNavigate();

//   useEffect(() => {
//   if (Object.keys(props.user).length === 0) {
//     nav("/");
//   }
// }, []);


  return (
    <div >
        <Tabs style={{ maxWidth: "95%", border: "1px solid black", height: "80%", borderRadius: 8, marginLeft: 13}}>
            <TabList>
            <Tab>General</Tab>
            <Tab>Schedule</Tab>
            </TabList>
            <div style={{ height: "80vh", }}>
              <TabPanel>
                <General pet_id={pet_id} setPet_id={setPet_id} user={props.user} setUser={props.setUser}/>
              </TabPanel>

              <TabPanel>
                <Schedule pet_id={pet_id} setPet_id={setPet_id} user={props.user} setUser={props.setUser}/>
              </TabPanel>
            </div>
        </Tabs>
    </div>
  )
}

export default Overview;