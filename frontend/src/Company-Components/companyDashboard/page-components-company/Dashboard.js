import React from 'react';
import { Link } from "react-router-dom"; 
import './dashboard.css';

const Dashboard = () => {
    return (
        <>
          <div className="container-fluid">
                <div className="outer-wrap justify-content-lg-evenly">
                    <div className="inner-wrap">
                    <div className="col-md-12 col-sm-12">
                        <div className="card-2 mb-3">
                        <div className="inner-wrap2">
                            <div className="inner-content d-flex justify-content-space-between">
                            <i className="fa fa-circle user-class" aria-hidden="true" />
                            <p className="hrf-l">Logo</p>
                            <div className="heading-content-box">
                                <div className="heading-box">
                                <h3 className="comp-dash-heading">COMPANY NAME &amp; BRANCH</h3>
                                </div>
                                <div className="p-box">
                                <p className>Division</p>
                                </div>
                                <div className="square-list1">
                                <ul>
                                    <li><i className="fa fa-square" aria-hidden="true" /><span className="font-weight-bold"> info@example.com</span></li>
                                    <li><i className="fa fa-square" aria-hidden="true" /><span> Head quarters country, city</span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-4">
                        <div className="card-2 mb-3">
                        <div className="card-body d-flex justify-content-start align-items-center ">
                            <i className="fa fa-search file-icon" aria-hidden="true" /><span className="pr ml-3 flex-grow-1 "><b className="bold-text"> Find Contractors</b> <small className="fgcolor ml-2"> Find the best match contractors</small></span> <span><Link to="find-contract" type="button " className="btn btn-ed ml-3 btn-sm ">START A NEW SEARCH</Link></span>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-2">
                        <div className="card-2 mb-3">
                        <div className="card-body d-flex justify-content-start align-items-center ">
                            <i className="fa fa-handshake trade-icon" aria-hidden="true" /><span className="pr ml-3 flex-grow-1"><b className="bold-text"> Positions</b> <small className="fgcolor ml-2"> Monitor recruitment compaigns, add or edit positions</small></span> <span><Link to="positions" type="button " className="btn btn-ed ml-3 btn-sm "> MANAGE POSITIONS</Link></span>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-2">
                        <div className="card-2 mb-3">
                        <div className="card-body d-flex justify-content-start align-items-center ">
                            <i className="fa fa-list-alt br-class" aria-hidden="true" /><span className="pr ml-3 flex-grow-1 "><b className="bold-text"> Tests </b> <small className="fgcolor ml-2"> create, edit or remove multiple choice tests. </small></span><span><Link to="test" type="button " className="btn btn-ed btn-sm ml-3 "> MANAGE TESTS </Link></span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="inner-wraper">
                    <div className="card-3 ml-5 mt-3">
                        <div className="card-body ">
                        <h6 className="hd font-weight-bold ">Credits remaining</h6>
                        </div>
                    </div>
                    <div className="card-5 ml-5">
                        <h6 className="hd1 font-weight-bold ml-4 mt-2 ">Manage Your Account</h6>
                        <p className="hrr ml-4 ">Paymenyt details</p>
                        <p className="hrr ml-4 ">Manage login details</p>
                        <p className="hrr ml-4 ">System Users</p>
                    </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard;