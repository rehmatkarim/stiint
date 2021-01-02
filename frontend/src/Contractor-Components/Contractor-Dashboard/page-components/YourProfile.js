import React, { useState } from "react";
import DatePicker from "react-datepicker";
import IntlTelInput from 'react-intl-tel-input';
import "react-datepicker/dist/react-datepicker.css";
function YourProfile(){
    const [dob, setDob] = useState(new Date());
    const [passportExpiryDate, setPassportExpiryDate] = useState(new Date());
    const [seamanExpiryDate, setSeamanExpiryDate] = useState(new Date());
    const [certificateExpiryDate,setCertificateExpiryDate] = useState(new Date());
    const [medCertificateExpiryDate,setMedCertificateExpiryDate] = useState(new Date());
    const [vaccinationExpiryDate,setVaccinationExpiryDate] = useState(new Date());
    return (
        
        <div className="yourProfile">
            <div className="container-fluid">
            <div className="row ml-3">
                <div className="col-md-4 ">
                <form>
                    <span>Your Cv&gt;<h4 className="left">Your Profile</h4></span>
                    <span><p>personal info, documentation &amp; certifications</p></span>
                    <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                        <label className="font-weight-bold">Date of birth</label>
                        <DatePicker selected={dob} className="date-box" onChange={date => setDob(date)} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="gender-label ">
                        <label className="font-weight-bold">Gender</label>
                        </div>
                        <div className="form-check-inline">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optradio" />Option 1
                        </label>
                        </div>
                        <div className="form-check-inline">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optradio" />Option 2
                        </label>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <label><b>Mobile Number</b> </label>
                            <IntlTelInput
                            containerClassName="intl-tel-input"
                            inputClassName="form-control"
                            />
                        </div>
                    </div>
                    
                    <div className="row mt-3">
                    <div className="col-md-12">
                        <h6>Current Location <span><a href="#" className="map">detect approximate location</a></span></h6>
                        <p>Please make sure to keep this updated all time, you can do so from your dashboard</p>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                        <div id="map-container-google-1" className="z-depth-1-half map-container">
                        <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} style={{border: 0}} allowFullScreen />
                        </div>
                    </div>
                    </div>
                    <div className="row mt-3 mb-3">
                    <div className="col-sm-12">
                        <input type="text" className="form-control" id="typelocation" aria-describedby="emailHelp" placeholder="Start typing location..." />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-8">
                        <label className="font-weight-bold">Permanent residential location</label>
                        
                        <select className="browser-default custom-select">
                            <option>Choose your option</option>
                            <option value="1">Pakistan</option>
                            <option value="2">America</option>
                            <option value="3">Turkey</option>
                        </select>
                    </div>
                    <div className="col-md-4 ">
                        <label><b>city</b></label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    </div>
                    <div>
                    <div className="row div-row mt-4 mb-2">
                        <div className="col-sm-12 ">
                        <label className="font-weight-bold mt-2">Passport/Nationality</label>
                        <select className="browser-default custom-select">
                            <option>Choose your option</option>
                            <option value="1">Pakistan</option>
                            <option value="2">America</option>
                            <option value="3">Turkey</option>
                        </select>
                        </div>
                        <div className="row">
                        <div className="col-md-12 ml-2 ">
                            <label className="font-weight-bold ml-2">Passport Number</label>
                            <input type="text" className="form-control  ml-2" aria-describedby="passport" />
                        </div>
                        </div>
                        <div className="col-md-4 ml-4  ">
                        <div className="form-group">
                            <label className="font-weight-bold">Expiry date</label>
                            <DatePicker className="date-box" selected={passportExpiryDate} onChange={date => setPassportExpiryDate(date)} />                    
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 ml-1">
                        <button className="btn btn-add" type="button" id="addpassport">+Add another passport</button>
                        </div>
                    </div>
                    <div className="row div-row mt-4 mb-2">
                        <div className="row">
                        <div className="col-md-8 mt-2 ml-2">
                            <label className="font-weight ml-2"><b>Seaman's book number</b><small>(optional)</small></label>
                            <input type="text" className="form-control  ml-2" aria-describedby="passport" placeholder={40458} />
                        </div>
                        </div>
                        <div className="col-md-4  ml-2">
                        <div className="form-group">
                            <label className="font-weight"><b>Expiry date</b><small>(if applicable)</small></label>
                            <DatePicker selected={seamanExpiryDate} className="date-box" onChange={date => setSeamanExpiryDate(date)} />
                        </div>
                        </div>
                    </div>
                    <div className="row div-row mt-4 ">
                        <div className="row">
                        <div className="col-md-8 ">
                            <label className="font-weigh  ml-2"><b>Certifications</b></label>
                            <select className="browser-default custom-select">
                                <option>Choose your option</option>
                                <option value="1">Pakistan</option>
                                <option value="2">America</option>
                                <option value="3">Turkey</option>
                            </select>
                        </div>
                        <div className="col-md-4 ml-0  ">
                            <div className="form-group">
                            <label className="font-weight-bold ">Expiry date</label>
                            <DatePicker selected={certificateExpiryDate} className="date-box" onChange={date => setCertificateExpiryDate(date)} />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 ml-1">
                        <button className="btn btn-add" type="button" id="addcertificate">+Add another Certification</button>
                        </div>
                    </div>
                    <div className="row div-row mt-4 ">
                        <div className="row">
                        <div className="col-md-8 ">
                            <label className="font-weigh  ml-2"><b>Medical Certificate</b></label>
                            <select className="browser-default custom-select">
                                <option>Choose your option</option>
                                <option value="1">Pakistan</option>
                                <option value="2">America</option>
                                <option value="3">Turkey</option>
                            </select>
                        </div>
                        <div className="col-md-4 ml-0  ">
                            <div className="form-group">
                            <label className="font-weight-bold ">Expiry date</label>
                            <DatePicker selected={medCertificateExpiryDate} className="date-box" onChange={date => setMedCertificateExpiryDate(date)} />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 ml-1">
                        <button className="btn btn-add" type="button" id="addmedicalcertificate">+Add another medical certificate</button>
                        </div>
                    </div>
                    <div className="row div-row mt-4 ">
                        <div className="row">
                        <div className="col-md-8 ">
                            <label className="font-weigh   ml-2"><b>Vaccination</b></label>
                            <select className="browser-default custom-select">
                                <option>Choose your option</option>
                                <option value="1">Pakistan</option>
                                <option value="2">America</option>
                                <option value="3">Turkey</option>
                            </select>
                        </div>
                        <div className="col-md-4 ml-0  ">
                            <label className="font-weight-bold ">Expiry date</label>
                            <DatePicker selected={vaccinationExpiryDate} className="date-box" onChange={date => setVaccinationExpiryDate(date)} />
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12 ml-1">
                        <button className="btn btn-add" type="button" id="addvaccination">+Add another vaccination</button>
                    </div>
                    </div>
                </form>
                <div>
                    <button type="save" className="btn btn-continue1"><b>Save Changes</b> </button>
                </div>
                </div>
            </div>
            </div>

        </div>
    );
}
export default YourProfile;