import React from 'react';
import  { useState } from "react";
import './accountAndBilling.css';

const CreditsAndBilling = () => {
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
    return (
        <>
        <div className="class col-md-8 ml-4">
    <p className="create-class">
      <small>Account&gt;</small>
    </p>
    <h5 className="Create-New-Test font-weight-bold">Credits and billings</h5>
  </div>
  <div className="class row justify-content-center">
    <div className="col-md-12 col-lg-6 col-sm-6">
      <div className="class-circle">
        <h1 className="text-center txt-cntr font-weight-bold">12cr</h1>
        <h3 className="text-center txt-cntr2 font-weight-bold">Remaining</h3>
        <br />
        <button type="button-1" className="btn btn-savetest" data-toggle="modal" data-target="#exampleModal">Buy Credits</button>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title font-weight-bold" id="exampleModalLabel">Buy Credits</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="container">
                  <div className="row">
                      <div className="col-md-4  top-para-box">
                          <p>Bundle Pricing</p>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-12 top-price-box">
                          <ul className="d-flex p-0">
                              <li className="font-weight-bold">10cr</li>
                              <li className="ml-2">=</li>
                              <li className="ml-2">USD 8.00</li>
                          </ul>

                          <ul className="d-flex p-0">
                              <li className="font-weight-bold">20cr</li>
                              <li className="ml-2">=</li>
                              <li className="ml-2">USD 15.00</li>
                          </ul>

                          <ul className="d-flex p-0">
                              <li className="font-weight-bold">30cr</li>
                              <li className="ml-2">=</li>
                              <li className="ml-2">USD 20.00</li>
                          </ul>
                      </div>

                  </div>
                  <div className="row mt-2">
                      <div className="col-md-12">
                          <form>
                          <div className="form-group">
                            <label className="font-weight-bold">How many credits would you like to purchase?</label>
                            <input type="text" className="form-control creditsBox" id="exampleInputEmail1" placeholder="=USD 0" aria-describedby="emailHelp"/>
                            
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold">Do you have a promo code? Enter it here</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            
                            </div>

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
                            <div className="row mt-2">
                                <div className="col-md-12 end-box text-center">
                                    <ul className="d-flex p-0">
                                        <li className="font-weight-bold">Discount</li>
                                        <li className="ml-5">-0.00</li>
                                    </ul>
                                    <ul className="d-flex p-0">
                                        <li className="font-weight-bold">Subtotal</li>
                                        <li className="ml-5">-0.00</li>
                                    </ul>
                                    <ul className="d-flex p-0">
                                        <li className="font-weight-bold ">Total</li>
                                        <li className="ml-5">-0.00</li>
                                    </ul>

                                </div>
                            </div>
                            <div className="row mt-3">
                            <div className="col-md-6">
                                <button type="save" className="fa fa-lock btn-continue-sub" aria-hidden="true"><b>PAY NOW</b></button>
                            </div>
                            </div>
                          </form>
                      </div>
                  </div>
                  </div>
                </div>
               
                </div>
            </div>
            </div>
        <p className="txt-corner1 ">$1=1cr=1 <i className="fa fa-user usr1 " aria-hidden="true " /></p>
      </div>
    </div>
  </div>
  <div className="class main-table1">
    <div className="row heading-table">
      <div className="col-md-4">
        <h4 className="font-weight-bold">INVOICE HISTORY</h4>
      </div>
    </div>
    <div className="row justify-content-center mt-2">
      <div className="col-md-12 table-box">
        <div className="card">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table user-table ">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col" className="w-50">Description</th>
                    <th scope="col">Refrence</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Status</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2017/2018</td>
                    <td>Yearly Subscription</td>
                    <td>STB1435738</td>
                    <td>08/May/2018</td>
                    <td>USD10.00</td>
                    <td>Paid</td>
                    <td className="border"><img src="images/pdf.png" /></td>
                  </tr>
                  <tr>
                    <td>2015/2016</td>
                    <td>Yearly Subscription</td>
                    <td>STB1435743</td>
                    <td>08/May/2018</td>
                    <td>USD10.00</td>
                    <td>Paid</td>
                    <td className="border"><img src="images/pdf.png" /></td>
                  </tr>
                  <tr>
                    <td>2014/2015</td>
                    <td>Yearly Subscription</td>
                    <td>STB1435543</td>
                    <td>08/May/2018</td>
                    <td>USD10.00</td>
                    <td>Paid</td>
                    <td className="border"><img src="images/pdf.png" /></td>
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

export default CreditsAndBilling;
