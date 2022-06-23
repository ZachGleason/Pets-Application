import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import General from './General';

const Overview = () => {
  return (
    <div >
        <Tabs style={{ maxWidth: "70%", border: "1px solid black", height: "80%", marginLeft: 50, borderRadius: 8}}>
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
              <h2>Any content 2</h2>
              </TabPanel>

              <TabPanel>
              <h2>test</h2>
              </TabPanel>
            </div>
        </Tabs>
    </div>
  )
}

export default Overview;