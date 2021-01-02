import React from 'react';
import { useState } from "react";
import {useForm} from 'react-hook-form';
import DatePicker from "react-datepicker";

const CreateNewPosition = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const {register,handleSubmit} = useForm();

  const onSubmit = (data) => {
    
    console.log(data,startDate);
    // props.handleData(data);
  } 
    return (
        <>
            <div className="container mt-4">
  <div className="row justify-content-center">
    <div className="col-lg-8 col-md-8 col-sm-12">
      <div className="card-1 mt-1 border-0">
        <div className="card-body ">
          <form  onSubmit={handleSubmit(onSubmit)}>
            <div className="class header1">
              <div className="class head">
                <h2 className="font-weight-bold">Create New Position
                </h2>
              </div>
              <div className="class head2 mt-2">
                <smaller>All fields are required unless otherwise stated</smaller>
              </div>
            </div>
            <div className="form-group">
              <label className="font-weight-bold">Position Title</label>
              <input type="fname" className="form-control" name="positionTitle" id="fname" placeholder="Offshor crane operation wanted"  ref={register} />
            </div>
            <div className="form-group">
              <label className="font-weight-bold">Application Email Address<small className="font-weight-light">(All fields are required unless otherwise stated.)</small></label>
              <input type="lname" className="form-control" name="email" ref={register} />
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-md-6  ">
                  <label className="font-weight-bold ">Start date</label>
                  <DatePicker selected={startDate} className="date-box" name="startDate" onChange={date => setStartDate(date)}  ref={register} />
                </div>
                <div className="col-md-6">
                  <label className="font-weight-bold">Minimum Duration</label>
                  <select className="browser-default custom-select" name="duration"  ref={register}>
                    <option>4 weeks</option>
                    <option value="5 weeks">5 weeks</option>
                    <option value="2 weeks">2 weeks</option>
                    <option value="3 weeks">1 week</option>
                 </select>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-md-6">
                  <label className="font-weight-bold">Country</label>
                  <select className="browser-default custom-select" name="country"  ref={register}>
                    <option>Namabia</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="America">America</option>
                    <option value="Turkey">Turkey</option>
                 </select>
                </div>
                <div className="col-md-6 ">
                  <label className="font-weight-bold ">City</label>
                  <input type="text" className="form-control" id="country" placeholder="Walvis Bay" name="city"  ref={register} />
                </div>
              </div>
            </div>
            <label className="font-weight-bold ">Day rate</label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <select className="browser-default custom-select" name="currency"  ref={register}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="PKR">PKR</option>
                    <option value="BHD">BHD</option>
                 </select>
              </div>
              <input type="text" className="form-control"  name="rate" ref={register} aria-label="Text input with dropdown button" />
            </div>
            <div className="form-group purple-border">
              <label className="font-weight-bold">Description<small>(optional)</small></label>
              <textarea className="form-control" id="exampleFormControlTextarea4" rows={3} defaultValue={""} name="discription"  ref={register}/>
            </div>
            <div>
              <button type="submit" className="btn btn-save"><b>CREATE POSITION</b> </button>
              <span>or <a href="#" className="cancel-link"><u>Cancel</u></a></span>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/* /#page-content-wrapper */}
  </div>
</div>

            
        </>
    )
}

export default CreateNewPosition;
