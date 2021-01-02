import './userReg.css';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import IntlTelInput from 'react-intl-tel-input';
import { useHistory } from "react-router-dom"
import 'react-intl-tel-input/dist/main.css';

 
import "react-datepicker/dist/react-datepicker.css";

function UserReg(){
  const history = useHistory();
    
    
    const [dob, setDob] = useState(new Date());
    const [passportExpiryDate, setPassportExpiryDate] = useState(new Date());
    const [seamanExpiryDate, setSeamanExpiryDate] = useState(new Date());
    const [certificateExpiryDate,setCertificateExpiryDate] = useState(new Date());
    const [medCertificateExpiryDate,setMedCertificateExpiryDate] = useState(new Date());
    const [vaccinationExpiryDate,setVaccinationExpiryDate] = useState(new Date());
     function addPassport() {
        var container = document.getElementById("addPassportDiv");
        var section = document.getElementById("Passport-div");
        console.log(section);
       container.appendChild(section.cloneNode(true));
      }
      function addCertficate(){
        var container = document.getElementById("addCertificateDiv");
        var section = document.getElementById("certficateDiv");
        console.log(section);
       container.appendChild(section.cloneNode(true));
      }
      function addMedCertificate(){
        var container = document.getElementById("addMedCertificateDiv");
        var section = document.getElementById("MedcertficateDiv");
        console.log(section);
       container.appendChild(section.cloneNode(true));
      }
      function addVaccination(){
        var container = document.getElementById("addVacDiv");
        var section = document.getElementById("vacDiv");
        console.log(section);
       container.appendChild(section.cloneNode(true));
      }
      const nextStep = ()=>history.push('userReg-2');
    

 
   
    return (
        <>
{/* Page Content */}
<div id="page-content-wrapper">
  <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <label className="logo-label">LOGO</label>
    <span>Register 1 of 3 <b>Your Profile</b></span>
  </nav>
  <div className="container" id="form-container">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card-1">
          <div className="card-body ">
            <form>
              <h4 className="text-center">Your Profile</h4>
              <p className="text-center">personal info, documentation &amp; certifications</p>
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
                  <label className="font-weight-bold">Mobile Number</label>
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
                    <iframe title="location map" src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} style={{border: 0}} allowFullScreen />
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
                  <label className="font-weight-bold">city</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
              </div>
              <div>
                <div className="row div-row mt-4 mb-2" id="Passport-div" >
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
                    <div className="col-md-12    ml-2 ">
                      <label className="font-weight-bold ml-2">Passport Number</label>
                      <input type="text" className="form-control  ml-2" aria-describedby="passport" />
                    </div>
                  </div>
                  <div className="col-md-4 ml-4  ">
                    <div className="form-group">
                      <label className="font-weight-bold">Expiry date</label>
                      <DatePicker className="date-box" selected={passportExpiryDate} onChange={date => setPassportExpiryDate(date)} />                    </div>
                  </div>
                </div>
                <div id="addPassportDiv"></div>
                
                <div className="row mt-3">
                  <div className="col-md-12 ml-1">
                    <button className="btn btn-add" id="PassportButton" type="button" onClick={addPassport}>+Add another passport</button>
                  </div>
                </div>
                <div className="row div-row mt-4 mb-2">
                  <div className="row">
                    <div className="col-md-7 mt-2 ">
                      <label className="font-weight-bold ml-2">Seaman's book number<small>(optional)</small></label>
                      <input type="text" className="form-control  ml-2" aria-describedby="passport" placeholder={40458} />
                    </div>
                    <div className="col-md-5 mt-2 ">
                    <div className="form-group">
                      <label className="font-weight-bold">Expiry date<small>(if applicable)</small></label>
                      <DatePicker selected={seamanExpiryDate} className="date-box" onChange={date => setSeamanExpiryDate(date)} />                    </div>
                  </div>
                  </div>
                  
                </div>
                <div className="row div-row mt-4 " id="certficateDiv">
                  <div className="row">
                    <div className="col-md-7 ">
                      <label className="font-weight-bold  ml-2"><b>Certifications</b></label>
                      <select className="browser-default custom-select">
                    <option>Choose your option</option>
                    <option value="1">Pakistan</option>
                    <option value="2">America</option>
                    <option value="3">Turkey</option>
                 </select>
                    </div>
                    <div className="col-md-5 ml-0  ">
                      <div className="form-group">
                        <label className="font-weight-bold ">Expiry date</label>
                        <DatePicker selected={certificateExpiryDate} className="date-box" onChange={date => setCertificateExpiryDate(date)} />                      </div>
                    </div>
                  </div>
                </div>
                <div id="addCertificateDiv"></div>
                <div className="row mt-3">
                  <div className="col-md-12 ml-1">
                    <button className="btn btn-add" type="button" id="addcertificate" onClick={addCertficate}>+Add another Certification</button>
                  </div>
                </div>
                <div className="row div-row mt-4 " id="MedcertficateDiv">
                  <div className="row">
                    <div className="col-md-7 ">
                      <label className="font-weight-bold  ml-2"><b>Medical Certificate</b></label>
                      <select className="browser-default custom-select">
                    <option>Choose your option</option>
                    <option value="1">Pakistan</option>
                    <option value="2">America</option>
                    <option value="3">Turkey</option>
                 </select>
                    </div>
                    <div className="col-md-5 ml-0  ">
                      <div className="form-group">
                        <label className="font-weight-bold ">Expiry date</label>
                        <DatePicker selected={medCertificateExpiryDate} className="date-box" onChange={date => setMedCertificateExpiryDate(date)} />
                      </div>
                    </div>
                  </div>
                </div>
                <div id="addMedCertificateDiv"></div>
                <div className="row">
                  <div className="col-md-12 ml-1">
                    <button className="btn btn-add" type="button" onClick={addMedCertificate} >+Add another medical certificate</button>
                  </div>
                </div>
                <div className="row div-row mt-4 " id="vacDiv">
                  <div className="row">
                    <div className="col-md-7 ">
                      <label className="font-weight-bold   ml-2"><b>Vaccination</b></label>
                       <select className="browser-default custom-select">
                    <option>Choose your option</option>
                    <option value="1">Pakistan</option>
                    <option value="2">America</option>
                    <option value="3">Turkey</option>
                 </select>
                    </div>
                    <div className="col-md-5 ml-0  ">
                      <label className="font-weight-bold ">Expiry date</label>
                      <DatePicker selected={vaccinationExpiryDate} className="date-box" onChange={date => setVaccinationExpiryDate(date)} />
                    </div>
                  </div>
                </div>
              </div>
              <div id="addVacDiv"></div>
              <div className="row mt-3">
                <div className="col-md-12 ml-1">
                  <button className="btn btn-add" type="button" id="addvaccination" onClick={addVaccination}>+Add another vaccination</button>
                </div>
              </div>
            </form>
            <div>
              <button type="save" className="btn btn-continue" onClick={nextStep}><b>CONTINUE</b> </button>
            </div>
          </div>
          {/* ends col-6 */}
        </div>
      </div>
    </div>
  </div>
</div>
</>
    );
}
export default UserReg;