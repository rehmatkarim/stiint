import React from 'react'
import { Link } from "react-router-dom"; 
import './test.css';

const Test = () => {
    
    return (
        <>
          <div className="main-cls">
            <div className="row heading-table1">
                <div className="col-md-6 mn-div">
                <h5><b>Tests</b></h5>
                <Link to="CreateTest" type="button" className="btn btn-outline-dark new-btn1" >+ CREATE NEW TEST</Link>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-md-12 col-sm-12">
                <div className="card">
                    <div className="card-body card-body1">
                    <div className="table-responsive">
                        <table className="table user-table">
                        <thead>
                            <tr>
                            <th scope="col">Test Name</th>
                            <th scope="col">No of Questions</th>
                            <th scope="col">Status</th>
                            <th scope="col" />
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>saturation diving level 1- multiple choice</td>
                            <td>10</td>
                            <td>Active</td>
                            <td><button type="button" className="btn btn-outline-dark new-btn">EDIT</button><i className="fa fa-trash trash-class" aria-hidden="true" /></td>
                            </tr>
                            <tr>
                            <td>General Diving Test</td>
                            <td>1</td>
                            <td>Draft</td>
                            <td>
                                <div className="btn-td"><button type="button" className="btn btn-outline-dark new-btn">EDIT</button><i className="fa fa-trash trash-class" aria-hidden="true" /></div>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Test; 