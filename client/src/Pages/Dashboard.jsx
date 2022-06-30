import React from 'react';
import DashboardNav from '../Components/DashboardNav';
// import Tabs from '../Components/Overview';
import Overview from '../Components/Overview';


const Dashboard = (props) => {
  return (
    <div>
        <DashboardNav user={props.user} setUser={props.setUser}/>
        <div>
            {/* <Tabs user={props.user} setUser={props.setUser}/> */}
            <Overview user={props.user} setUser={props.setUser}/>
        </div>
    </div>
  )
}

export default Dashboard