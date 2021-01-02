import React, { useState} from 'react';
import $ from 'jquery'; 
import './dashboard.css';
function Dashboard(){
  const [is_checked,set_is_checked]= useState(false);

const toggle_value = () => {
    set_is_checked(!is_checked);
    
   
}
$('#toggle-button').on('click',function(){
  if (is_checked===true){
    $('.dispute-card').css('display','block');
  }
  else{
    $('.dispute-card').css('display','none');
  }
 
});


    return (
        <div className="dashBoard">
         <div className="container-fluid mt-4">
            <div className="outer-wrap d-flex justify-content-lg-around">
              <div className="inner-wrap">
                <div className="col-md-12">
                  <div className="inner-wrap2">
                    <div className="inner-content d-flex justify-content-space-between">
                      <i className="fa fa-user-circle user-class" aria-hidden="true" />
                      <a className="hrf hrf1" href="#">upload a <br /> photo</a>
                      <div className="heading-content-box">
                        <div className="heading-box">
                          <h2>PIER-ANGELINO BROGNERI</h2>
                        </div>
                        <div className="button-box">
                          <button type="button" className="btn btn-outline-dark btn-sm">Diver</button>
                          <button type="button" className="btn btn-outline-dark btn-sm">Rigger</button>
                        </div>
                        <div className="square-list  ">
                          <ul>
                            <li><i className="fa fa-square" aria-hidden="true" /><span className="font-weight-bold"> linobrogeri@gmail.com</span></li>
                            <li><i className="fa fa-square" aria-hidden="true" /><span> Cap town, south africa</span></li>
                            <li><i className="fa fa-square" aria-hidden="true" /><span> <b>Currently</b> in welvis bay, Namibia</span></li>
                          </ul>
                        </div>
                        <div className="star-box">
                          <i className="fa fa-star st1" aria-hidden="true" /><i className="fa fa-star st1" aria-hidden="true" /><i className="fa fa-star st1" aria-hidden="true" /><i className="fa fa-star st1" aria-hidden="true" /><i className="fa fa-star st1" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                    <div className="toggle-button-wrapper">
                      <div className="toggle-button-box">
                        <label className="switch">
                          <input  checked={is_checked}  onChange={toggle_value} id="toggle-button"  type="checkbox" />
                          <div className="slider"></div>
                          <div className="text"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 dispute-card">
                  <div className="card-2 mb-3">
                    <div className="card-body d-flex justify-content-start align-items-center cbd ">
                      <i className="fa fa-flag " aria-hidden="true " /><span className="pr ml-3 flex-grow-1 ">
                        <small className="fgcolor ml-2 "> Please note - you have been flaged</small></span>
                      <button type="button" className="btn btn-ed1 ml-5 btn-sm" data-toggle="modal" data-target="#myModal">DISPUTE</button>
                      <div className="modal fade" id="myModal" data-backdrop="true" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            
                            <div className="modal-body">
                              <p className="font-weight-bold model-body-heading">Dispute Flag</p>
                              <div className="dispute-form-container">
                                <form>
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="form-group">
                                        <label htmlFor="disputeReason" className="font-weight-bold">Reason For Dispute</label>
                                        <input type="text" className="form-control" id="dispute-reason" aria-describedby="emailHelp"  />
                                      
                                      </div>
                                    </div>
                                  
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="form-group">
                                        <label htmlFor="detailDisputeReason" className="font-weight-bold">Detail</label>
                                        <textarea className="form-control" id="detail-dispute-reason" rows={3} defaultValue={""} />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-5">
                                    <button type="button" class="btn btn-secondary dispute-button">Send Dispute</button>
                                    </div>
                                    <div className="col-md-4 d-flex">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" className="close-button">or Cancel</span></button>
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
                </div>

                <div className="col-md-12">
                  <div className="card-2 mb-3">
                    <div className="card-body d-flex justify-content-start align-items-center ">
                      <i className="fa fa-id-card file-icon " aria-hidden="true " /><span className="pr ml-3 flex-grow-1 "><b> Your Profile</b> <small className="fgcolor ml-2"> Personal info, documentation &amp; certifications</small></span> <span><button type="button " className="btn btn-ed ml-5 btn-sm ">EDIT</button></span>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="card-2 mb-3">
                    <div className="card-body d-flex justify-content-start align-items-center ">
                      <i className="fa fa-wrench trade-icon " aria-hidden="true " /><span className="pr ml-3 flex-grow-1 "><b> Your Trade</b> <small className="fgcolor ml-2"> Personal info, documentation &amp; certifications</small></span> <span><button type="button " className="btn btn-ed ml-5 btn-sm ">EDIT</button></span>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="card-2 mb-3">
                    <div className="card-body d-flex justify-content-start align-items-center ">
                      <i className="fa fa-briefcase br-class " aria-hidden="true " /><span className="pr ml-3 flex-grow-1 "><b> Employment History </b> <small className="fgcolor ml-2"> Personal info, documentation &amp; certifications </small></span><span><button type="button " className="btn btn-ed btn-sm ml-5 "> EDIT </button></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inner-wraper">
                <div className="card-3 ml-5">
                  <div className="card-body ">
                    <h6 className="hd font-weight-bold ">Profile Completion (25%)</h6>
                    <div className="progress prog ">
                      <div className="progress-bar pbar " style={{width: '30%'}} />
                    </div>
                  </div>
                </div>
                <div className="card-3 ml-5">
                  <h6 className="hd1 font-weight-bold ml-2 mt-2 ">Latest Invoice</h6>
                  <p className="hrr ml-2 ">01 March 2018 <span className="mj ml-3 ">USD 10.00</span><b className="pd ml-5 ">PAID</b></p>
                </div>
                <div className="card-4 ml-5">
                  <h6 className="hd1 font-weight-bold ml-2 mt-2 ">Upcoming Invoice</h6>
                  <p className="hrr ml-2 ">01 April 2018 <span className="mj ml-3 ">USD 10.00</span></p>
                </div>
                <div className="card-5 ml-5">
                  <h6 className="hd1 font-weight-bold ml-2 mt-2 ">Manage Your Account</h6>
                  <p className="hrr ml-2 ">View all invoices</p>
                  <p className="hrr ml-2 ">Manage payment details</p>
                  <p className="hrr ml-2 ">Manage login details</p>
                </div>
              </div>
            </div>
          </div>


        </div>
    );
}
export default Dashboard;
