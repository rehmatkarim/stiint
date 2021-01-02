import DatePicker from "react-datepicker";
import React, { useState } from "react";
import IntlTelInput from 'react-intl-tel-input';
import { useHistory } from "react-router-dom"
function UserRegThird(){
    const history = useHistory();
    const nextPage = ()=>history.push('subscrip');
    const [startDate, setStartDate] = useState(new Date());
    const [expiryDate, setExpiryDate] = useState(new Date());
    const addAnotherJob = ()=>{
        var container = document.getElementById("addAnotherJobFields");
        var section = document.getElementById("jobFields");
        container.appendChild(section.cloneNode(true));
    }
    return(
        <div className="userRegThird">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card-1">
                            <div className="card-body ">
                                <h4 className="text-center font-weight-bold">Employee History</h4>
                                 <p className="text-center">All fields are required unless otherwise stated</p>
                                 <div className="div-row" id="jobFields">
                                 <div className="row  ml-3 mr-3">
                                    <div className="col-md-12">
                                        <label className="font-weight-bold ml-2 mt-4">Position</label>
                                        <input type="text" className="form-control ml-0 mb-2" aria-describedby="passport" />
                                    </div>
                                     <div className="col-lg-6 col-md-12 col-12 ">
                                        <div className="form-group">
                                            <label className="font-weight-bold">Completion date</label>
                                            <DatePicker className="date-box" selected={startDate} onChange={date => setStartDate(date)} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12 ">
                                        <div className="form-group">
                                            <label className="font-weight-bold">Expiry date</label>
                                            <DatePicker className="date-box" selected={expiryDate} onChange={date => setExpiryDate(date)} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="font-weight-bold ml-2 mt-4">Contractor</label>
                                        <input type="text" className="form-control ml-0 " aria-describedby="passport" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="font-weight-bold ml-2 mt-4">Client</label>
                                        <input type="text" className="form-control ml-0" aria-describedby="client" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="font-weight-bold ml-2 mt-4">Area</label>
                                        <input type="text" className="form-control ml-0" aria-describedby="area" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="font-weight-bold ml-2 mt-4">Vessel<small>(optional)</small></label>
                                        <input type="text" className="form-control ml-0 " aria-describedby="vessel" />
                                    </div>
                                    <div className="col-md-12">
                                        <label className="font-weight-bold ml-2 mt-4">Description</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="font-weight-bold ml-2 mt-4">Contact Person<small>(optional)</small></label>
                                        <input type="text" className="form-control ml-0 " aria-describedby="contact" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="font-weight-bold ml-2 mt-4">Mobile Number</label>
                                        <IntlTelInput
                                                containerClassName="intl-tel-input"
                                                inputClassName="form-control"
                                                />
                                    </div>
                                    <div className="col-md-12">
                                        <label className="font-weight-bold ml-2 mt-4">Contact Email</label>
                                        <input type="email" className="form-control ml-0 mb-2" aria-describedby="email" />
                                    </div>
                                </div>
                                  
                            </div>
                            <div id="addAnotherJobFields" className="mt-4"></div>
                                    <div className="col-md-12 ml-1">
                                        <button className="btn btn-add" type="button" onClick={addAnotherJob}>+Add another job</button>
                                    </div>
                         </div>
                        <button type="save" className="btn btn-continue" onClick={nextPage}><b>FINISHED</b> </button>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="col-md-9 ">
                    <p className="text-right">Save and come back later</p>
                </div>
             </div>
        </div>

    </div>
    );
}
export default UserRegThird;