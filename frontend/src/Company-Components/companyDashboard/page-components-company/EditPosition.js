import React from 'react';
import { useState } from "react";
import DatePicker from "react-datepicker";
import './editPosition.css';

const EditPosition = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
             <div className="main-container">
    <div className="row top-row">
      <div className="col-md-6 ml-3">
        <p>Positions&gt;Edit positions<br /><b className="top-heading">Offshore crane operators wanted</b> <br /><small>All fields are required unless otherwise stated</small></p>
      </div>
    </div>
  </div>
  <div className="main-container ml-3 mr-3">
    <div className="row ">
      <div className="col-lg-4 col-md-12 col-sm-4">
        <form>
          <div className="form-group">
            <label className="font-weight-bold">Position Title</label>
            <input type="fname" className="form-control" id="fname" placeholder="Offshor crane operation wanted" />
          </div>
          <div className="form-group">
            <label><b>Application Email Address</b><smaller className="txt-size">All fields are required unless otherwise stated.</smaller></label>
            <input type="lname" className="form-control" />
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-md-6  ">
                <label className="font-weight-bold">Start date</label>
                <DatePicker selected={startDate} className="date-box" onChange={date => setStartDate(date)} />
              </div>
              <div className="col-md-6">
                <label className="font-weight-bold">Minimum Duration</label>
                <select className="browser-default custom-select">
                    <option>4 weeks</option>
                    <option value="1">5 weeks</option>
                    <option value="2">2 weeks</option>
                    <option value="3">1 week</option>
                 </select>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-md-6">
                <label className="font-weight-bold">Country</label>
                <select className="browser-default custom-select">
                    <option>Namabia</option>
                    <option value="1">Pakistan</option>
                    <option value="2">America</option>
                    <option value="3">Turkey</option>
                 </select>
              </div>
              <div className="col-md-6 ">
                <label className="font-weight-bold">City</label>
                <input type="text" className="form-control" id="country" placeholder="Walvis Bay" />
              </div>
            </div>
          </div>
          <label className="font-weight-bold">Day rate</label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
            <select className="browser-default custom-select">
                    <option>USD</option>
                    <option value="1">EUR</option>
                    <option value="2">PKR</option>
                    <option value="3">BHD</option>
                 </select>
            </div>
            <input type="text" className="form-control" aria-label="Text input with dropdown button" />
          </div>
          <div className="form-group purple-border">
            <label className="font-weight-bold">Description<small>(optional)</small></label>
            <textarea className="form-control" id="exampleFormControlTextarea4" rows={3} defaultValue={""} />
          </div>
          <div>
            <button type="save" className="btn btn-save"><b>SAVE CHANGES</b> </button>
            <span>or <a href="#" className="cancel-link"><u>Cancel</u></a></span>
          </div>
        </form>
      </div>
    </div>
  </div>
        </>
    )
}

export default EditPosition;
