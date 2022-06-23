import React from 'react';
import DashboardNav from '../Components/DashboardNav';
import Tabs from '../Components/Overview';


const Dashboard = () => {
  return (
    <div>
        <DashboardNav />
        <div>
            <Tabs />
        </div>
    </div>
  )
}

export default Dashboard