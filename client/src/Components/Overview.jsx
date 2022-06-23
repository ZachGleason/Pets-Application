import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import General from './General';
import Schedule from '../Components/Schedule';
import Media from '../Components/Media';

const Overview = () => {
  return (
    <div >
        <Tabs style={{ maxWidth: "95%", border: "1px solid black", height: "80%", borderRadius: 8, marginLeft: 13}}>
            <TabList>
            <Tab>General</Tab>
            <Tab>Schedule</Tab>
            <Tab>Media</Tab>
            <Tab>Alerts</Tab>
            </TabList>
            <div style={{ height: "80vh", }}>
              <TabPanel>
                <General />
              </TabPanel>

              <TabPanel>
                <Schedule />
              </TabPanel>

              <TabPanel> 
                <Media />
              </TabPanel>
            </div>
        </Tabs>
    </div>
  )
}

export default Overview;