import React from 'react'
import './Status.css'
import Nav from '../../Components/Nav/Nav'

const Status = () => {
  return (
    
    <div>
        <Nav/>
        <h3 className='statushead'>Complaint Status</h3>
        <table className='tablestatus'>
        <thead className='staushead1'>
          <tr>
            <th>Employee ID</th>
            <th>Complaint Title</th>
            <th>Complaint Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
         <td className='eid'> MA1234</td>  
         <td className='etitle'>Network Issue</td>
         <td className='edate'>06-sep-2024</td>
         <td className='estatus'>In Progress</td>
        </tbody>
        </table>



    </div>
  )
}

export default Status