import React, { useState } from 'react'

import axios from 'axios'



const Search = () => {
    const [patient, changePatient] = useState(
        {
            "name": ""
        }
    )
    const [result, changeResult] = useState([])
  
    const deletepatient=(id)=>{
        let input={"_id":id}
        axios.post("http://localhost:8081/delete",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Successfully deleted")
                } else {
                    alert("Something went wrong")
                    
                }
            }
        ).catch()
    }
    
    const InputHandler = (event) => {
        changePatient({ ...patient, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(patient)
        axios.post("http://localhost:8081/search", patient).then(
            (response) => {
                changeResult(response.data)
            }
        ).catch()


    }

    return (
        <div>
        
            <h3 align="center"><b>Enter the patient name</b></h3>
            <div className="container">
                <div className="row g-3">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={patient.name} onChange={InputHandler} />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-primary" onClick={readValue}>Search</button>
                    </div>

                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Mobile No</th>
                                        <th scope="col">Dr Name</th>
                                        <th scope="col">Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        result.map(
                                            (value, index) => {
                                                return <tr>
                                                    <td scope="row">{value.name}</td>
                                                    <td>{value.no}</td>
                                                    <td>{value.dname}</td>
                                                    <td>{value.addr}</td>
                                                    <td><button className="btn btn-danger" onClick={()=>{deletepatient(value._id)}}>Delete</button></td>
                                                </tr>
                                            }
                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search