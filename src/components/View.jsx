import React, { useEffect, useState } from 'react'

import axios from 'axios'


const View = () => {
    const [patient, changePatient] = useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8081/view").then(
            (response)=>{
                changePatient(response.data)
            }
        ).catch()
    }
    useEffect(()=>{fetchData()},[])
        
    return (
        <div>
     
            <div className="container">
                <div className="row">
                <h3 align="center"><b>Patient Details</b></h3>
                <br></br>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col"> Name</th>
                                    <th scope="col"> Mobile No</th>
                                    <th scope="col"> Doctor Name</th>
                                    <th scope="col">Address</th>
                                </tr>
                            </thead>
                            {
                                patient.map(
                                    (value,index)=>{
                                        return <tbody>
                                        <tr>
                                            <td scope="row">{value.name}</td>
                                            <td>{value.no}</td>
                                            <td>{value.dname}</td>
                                            <td>{value.addr}</td>
                                        </tr>
                                        
                                    </tbody>
                                    }
                                )
                            }
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default View