import React, { useState } from "react";
import './subscription.css';
function Subscription(){
    const minOffset = 0;
    const maxOffset = 60;
    const thisYear  =  new Date().getFullYear();
    
    const [selectedYear, setSelectedYear] = useState(thisYear);
    const yearOptions=[];
    for (let i = minOffset; i <= maxOffset; i++) {
        const year = thisYear + i;
        yearOptions.push(<option value={year}>{year}</option>);
      }
      const monthOptions = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      const [selectedMonth,setSelectedMonth] = useState(monthOptions[0]);
    const options = [
        "Master Card","Visa Card"   ];
        const [selectedOption, setSelectedOption] = useState(options[0]);
    return(
        <div className="subscription">
            <div className="container">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card-1">
        <div className="card-body ">
          <h4 className="text-center font-weight-bold">Subscription - USD 10 / Year<span className="fa fa-lock lock-icon" /></h4>
          <p className="text-center"><small>Build annually, from the date you signup</small></p>
          <div className=" div-row mt-3 ml-2 mr-2">
            <div className="row ml-2">
              <div className="col-sm-8">
                <label className="font-weight-bold mt-2">Card Type</label>
                <select className="browser-default custom-select mb-3" 
                                     value={selectedOption}
                                     onChange={(e)=>setSelectedOption(e.target.value)} >
                                         {options.map((option) => (
                                        <option key={option} value={option}>
                                                {option}
                                        </option>
                                            ))}

                                    </select>
              </div>
              <div className="col-md-4 mt-5">
                <img src="images/mastercard.png" className="image-fluid card-icon" />
                <span><img src="images/visa.png" className="image-fluid card-icon" /></span>
              </div>
            </div>
            <div className="row ml-2 mr-2">
              <div className="col-sm-6">
                <label className="font-weight-bold mt-2">Expiry Date</label>
                <select className="browser-default custom-select mb-3" 
                                     value={selectedMonth}
                                     onChange={(e)=>setSelectedMonth(e.target.value)} >
                                         {monthOptions.map((option) => (
                                        <option key={option} value={option}>
                                                {option}
                                        </option>
                                            ))}

                                    </select>
              </div>
              <div className="col-sm-6 mt-4">
                
                <select className="browser-default custom-select mt-3" value={selectedYear} onChange={(e)=>setSelectedYear(e.target.value)}> 
                { yearOptions}
                </select>
              </div>
            </div>
            <div className="row ml-2 mr-2">
              <div className="col-sm-12">
                <label className="font-weight-bold mt-4">Card Number</label>
                <input type="text" className="form-control" id="typelocation" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className="row ml-2 mr-2">
              <div className="col-sm-12">
                <label className="font-weight-bold mt-4">Name on card</label>
                <input type="text" className="form-control" id="typelocation1" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className="row ml-2 mr-2">
              <div className="col-sm-6 mb-4">
                <label className="font-weight-bold mt-4">CCV</label>
                <input type="text" className="form-control" id="typelocation2" aria-describedby="emailHelp" />
              </div>
            </div>
          </div>
          <div className="row mt-2 pl-2 pr-2">
            <div className="col-sm-12 mb-2">
              <label className="font-weight-bold mt-4">do you have a promo code? Enter it here</label>
              <input type="text" className="form-control" id="typelocation3" aria-describedby="emailHelp" placeholder="ST11NT" />
              <p><small>Nice one! You get <b>20% Off </b>your first year's subscription.</small></p>
            </div>
          </div>
          <div className="col-md-6">
            <button type="save" className="fa fa-lock btn-continue" aria-hidden="true"><b>PAY NOW</b></button>
          </div>
        </div>
      </div>
      <div className="row mt-2 pl-3 pr-3">
        <div className="col-md-12 ">
          <p className="text-right">Pay Later</p>
        </div>
      </div>
    </div>
  </div>
</div>


        </div>
    );
}
export default Subscription;