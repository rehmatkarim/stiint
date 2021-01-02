import React from 'react';
import { Link } from "react-router-dom"; 
import './positions.css';

const Positions = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 col-sm-12 col-lg-8  mt-5">
                    <div className="mn-div d-flex">
                        <div className="mn-div1">
                        <h5><b>Positions</b></h5>
                        </div>
                        <div className="mn-div2">
                        <Link to="/createPosition" type="button" className="btn btn-outline-secondary btn-scnd ml-4">+ CREATE NEW POSITION</Link>
                        
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-lg-12 col-md-8 col-sm-12 ">
                    <div className="btn-group btns-class">
                        <button type="button" className="btn btn-available1">Draft(1)</button>
                        <button type="button" className="btn btn-won1">In Recruitment(1)</button>
                        <button type="button" className="btn btn-lost1">Archive(34)</button>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 ">
                    <div className="wrap-inner-pos">
                        <div className="inner-content d-flex justify-content-lg-between">
                        <h2 className="job-title">Saturation divers wanted for 2 month contract</h2>
                        <div className="btn-group">
                            <p>Test Complete <br /> <b>(Two contractors are required)</b></p>
                        </div>
                        </div>
                        <div className="square-list">
                        <ul>
                            <li><i className="fa fa-square" aria-hidden="true" /><span  className="square-list-text">Starts 1 May 2018</span></li>
                            <li><i className="fa fa-square" aria-hidden="true" /><span  className="square-list-text"> 6 Weeks</span></li>
                            <li><i className="fa fa-square" aria-hidden="true" /><span  className="square-list-text"> Dubai</span></li>
                            <li><i className="fa fa-square" aria-hidden="true" /><span  className="square-list-text"> USD100 / Day</span></li>
                        </ul>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odio culpa aut blanditiis nulla tempore, odit facilis reiciendis,</p>
                        <div className="row mt-2">
                        <div className="col-md-12 col-sm-12">
                            <div id="accordion">
                            <div className="card">
                                <div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th scope="col">Contractor</th>
                                            <th scope="col" />
                                            <th scope="col">Test Score</th>
                                            <th scope="col">Compatibility</th>
                                            <th scope="col"><button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <i className="fa fa-minus" aria-hidden="true" />
                                            </button></th>
                                        </tr>
                                        </thead>
                                        <tbody id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                        <tr>
                                            <td>
                                            <div className="class main1">
                                                <div className="class new0">
                                                <i className="fa fa-user-circle user-classs" aria-hidden="true" />
                                                </div>
                                                <div className="class new">
                                                <div className="class new1">
                                                    <p>Rosalie Chapman <br />View Cv / <a className=" hrf1" href="#"><u>rosalie@example.com</u></a><br />Rate job performance</p>
                                                </div>
                                                </div>
                                            </div>
                                            </td>
                                            <td> <i className="fa fa-trophy tr" /></td>
                                            <td>
                                            <p className="class tr1">85%</p>
                                            </td>
                                            <td>
                                            <div className="class new00">
                                                <p>85%</p>
                                            </div>
                                            </td>
                                            <td />
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className="class main1">
                                                <div className="class new0">
                                                <i className="fa fa-user-circle user-classs" aria-hidden="true" />
                                                </div>
                                                <div className="class new">
                                                <div className="class new1">
                                                    <p>Rosalie Chapman <br />View Cv / <a className=" hrf1" href="#"><u>rosalie@example.com</u></a><br />Rate job performance</p>
                                                </div>
                                                </div>
                                            </div>
                                            </td>
                                            <td> <i className="fa fa-trophy tr" /></td>
                                            <td>
                                            <p className="class tr1">85%</p>
                                            </td>
                                            <td>
                                            <div className="class new01">
                                                <p>85%</p>
                                            </div>
                                            </td>
                                            <td />
                                        </tr>
                                        <tr className="last-row">
                                            <td>
                                            <div className="class main1">
                                                <div className="class new0">
                                                <i className="fa fa-user-circle user-classs" aria-hidden="true" />
                                                </div>
                                                <div className="class new">
                                                <div className="class new1">
                                                    <p>Rosalie Chapman <br />View Cv / <a className=" hrf1" href="#"><u>rosalie@example.com</u></a><br />Rate job performance</p>
                                                </div>
                                                </div>
                                            </div>
                                            </td>
                                            <td><i className="fa fa-lock lock-class" aria-hidden="true" /></td>
                                            <td />
                                            <td>
                                            <div className="class new02">
                                                <p>85%</p>
                                            </div>
                                            </td>
                                            <td><button type="button" className="btn btn-unlock">UNLOCK (1 CREDIT)</button></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 ">
                    <div className="second-wrap-inner">
                        <div className="inner-content d-flex justify-content-lg-between">
                        <h2 className="job-title">Saturation divers wanted for 2 month contract</h2>
                        <div className="btn-group ">
                            <p>Tests in progress... <br /> <b>(Three contractors are required)</b></p>
                        </div>
                        </div>
                        <div className="square-list">
                        <ul>
                            <li><i className="fa fa-square" aria-hidden="true" /><span className="square-list-text"> Starts 1 May 2018</span></li>
                            <li><i className="fa fa-square" aria-hidden="true" /><span className="square-list-text"> 6 Weeks</span></li>
                            <li><i className="fa fa-square" aria-hidden="true" /><span className="square-list-text"> Dubai</span></li>
                            <li><i className="fa fa-square" aria-hidden="true" /><span className="square-list-text"> USD100 / Day</span></li>
                        </ul>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odio culpa aut blanditiis nulla tempore, odit facilis reiciendis,</p>
                        <div className="class main-class0">
                        <div className="class main-div00 mt-2">
                            <div className="class main-div0 ">
                            <h1>17</h1>
                            <p>HOURS</p>
                            </div>
                            <div className="class main-div0 ml-2">
                            <h1>04</h1>
                            <p>MINS</p>
                            </div>
                        </div>
                        <div className="class main-div1 mt-2">
                            <div>
                            <i className="fa fa-trophy tr-1" />
                            </div>
                            <div className="class main-div2">
                            <p className="txt-class1">Stintt is hard at work recruiting the best<br /> for this position, sit tight!</p>
                            </div>
                        </div>
                        <div className="class main-div3 mt-2">
                            <div className="class main-div01">
                            <i className="fa fa-user-circle user-class" aria-hidden="true" />
                            </div>
                            <div className="class main-div02">
                            <h5>2 of 3 matches</h5>
                            <h6>found so far....</h6>
                            </div>
                        </div>
                        <div className="class main-div0-0 mt-2 ">
                            <h3 className="p-tag02">STOP THE CLOCK?</h3>
                            <p className="p-tagmain">If you stop the clock, contractors<br /> will no longer be able to apply</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default Positions;
