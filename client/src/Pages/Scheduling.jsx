import React from 'react'
import DashboardNav from '../Components/DashboardNav';
import ScheduleForm from '../Components/ScheduleForm';

const Scheduling = () => {
  return (
      <div className='black'>
        <DashboardNav />
        <div style={{ height: 380, width: "80%", margin: "auto", borderRadius: 10}}>
            <div style={{ height: 580,  margin: "auto", borderRadius: 10}}>
                <ScheduleForm style={{ maxWidth: 200, margin: "auto"}}/>
           </div>
        </div>
     </div>
  )
}

export default Scheduling;