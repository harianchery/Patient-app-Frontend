import axios from 'axios'
import React, { useState } from 'react'


const Add = () => {
    const[patient,changePatient]=useState([
        {
            "name":"",
            "no":"",
            "dname":"",
            "addr":""
        }
    ]
)

const InputHandler=(event)=>{
    changePatient({...patient,[event.target.name]:event.target.value})
}

const read=()=>{
    console.log(patient)
    axios.post("http://localhost:8081/add",patient).then(
        (response)=>{
            console.log(response.data)

            if (response.data.status=="success") {
                alert("Added successfully")
                
            } else {
                alert("Error!")
                
            }
        }
    ).catch()

}
return (
    <div>
  
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Patient Name</label>
                            <input type="text" className="form-control" name='name' value={patient.name} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Mobile Number</label>
                            <input type="text" className="form-control"name='no' value={patient.no} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Doctor Name</label>
                            <input className="form-control" name='dname' value={patient.type}onChange={InputHandler}></input>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Address</label>
                            <textarea type="text" className="form-control" name='addr' value={patient.addr} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={read}>Add New patient</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add