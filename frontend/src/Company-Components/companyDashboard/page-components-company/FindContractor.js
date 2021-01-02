import React from 'react'
import './findContractor.css';

const FindContractor = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="outer-wrap justify-content-lg-around">
                    <div className="inner-wrap">
                    <div className="inner-head">
                        <i className="fa fa-search inner-head1" aria-hidden="true" />
                        <h2 className="text-capitalize">find contractors</h2><br />
                    </div>
                    <div className="class inner-head2">
                        <ul id="progressbar" className=" progressbar1 text-center">
                        <li className="active step0" />
                        <li className="step1" />
                        <li className="step2" />
                        <li className="step3" />
                        </ul>
                    </div>
                    <div className="inner-mid col-12">
                        <label className="lbl mt-2">Which job are you recruiting for</label>
                            <select className="browser-default custom-select">
                                <option>Choose your option</option>
                                <option value="1">Pakistan</option>
                                <option value="2">America</option>
                                <option value="3">Turkey</option>
                            </select>
                    </div>
                    <div className="class-label col-12">
                        <label className="lbl mt-2 ">How many contractors are required for this job</label>
                        <div className="input-group input-cl ">
                        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <span className="input-group-text grp-txt" id="basic-addon2">= 3 credit</span>
                        </div>
                        </div>
                        <label className="credits">Credits will only be deducted once the final search is performed</label>
                    </div>
                    <div className="inner-mid1 col-12">
                        <label className="lbl mt-2">Associate test</label>
                        <select className="browser-default custom-select">
                            <option>Choose your option</option>
                            <option value="1">Pakistan</option>
                            <option value="2">America</option>
                            <option value="3">Turkey</option>
                        </select>
                    </div>
                    <div className="inner-mid2 col-12">
                        <label className="font-weight-bold">Job Requirements</label><br />
                        <label className="lbl">Role/Skills required<small> (you can select multiple)</small></label>
                        <input data-role="tagsinput " type="text " className="form-control max-width ml-0 " aria-describedby="passport " placeholder="Start typing a role or position " />
                    </div>
                    <div className="inner-mid1 col-12">
                        <label className="lbl mt-2">qualifications required<small> (you can select multiple)</small></label>
                        <select className="browser-default custom-select">
                            <option>Choose your option</option>
                            <option value="1">Pakistan</option>
                            <option value="2">America</option>
                            <option value="3">Turkey</option>
                        </select>
                    </div>
                    <div className="inner-mid2 col-12">
                        <label className=" lbl mt-2 ">Years experience required</label>
                        <input data-role="tagsinput " type="text " className="form-control max-width ml-0 " aria-describedby="passport " placeholder="5 Years " />
                    </div>
                    <div className="inner-mid3 col-12">
                        <label className="lbl mt-2">Passport/Nationality</label>
                        <select className="browser-default custom-select">
                            <option>Choose your option</option>
                            <option value="1">Pakistan</option>
                            <option value="2">America</option>
                            <option value="3">Turkey</option>
                        </select>
                    </div>
                    <div className="inner-mid4 col-12">
                        <label className="lbl mt-2">Seaman's book required</label><br />
                        <div className="form-check-inline">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optradio" />Yes
                        </label>
                        </div>
                        <div className="form-check-inline">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optradio" />No
                        </label>
                        </div>
                    </div>
                    <div className="inner-mid3 col-12">
                        <label className="lbl mt-2">Certifications &amp; documentations required<small> (you can select multiple)</small></label>
                        <select className="browser-default custom-select">
                            <option>Choose your option</option>
                            <option value="1">Pakistan</option>
                            <option value="2">America</option>
                            <option value="3">Turkey</option>
                        </select>
                    </div>
                    <div className="inner-mid3 col-12">
                        <label className="lbl mt-2">Medical certificates required<small> (you can select multiple)</small></label>
                        <select className="browser-default custom-select">
                            <option>Choose your option</option>
                            <option value="1">Pakistan</option>
                            <option value="2">America</option>
                            <option value="3">Turkey</option>
                        </select>
                    </div>
                    <div className="inner-mid3 col-12">
                        <label className="lbl mt-2">Vaccinations required</label>
                        <select className="browser-default custom-select">
                            <option>Choose your option</option>
                            <option value="1">Pakistan</option>
                            <option value="2">America</option>
                            <option value="3">Turkey</option>
                        </select>
                    </div>
                    <div className="inner-mid1 col-12">
                        <div className="inner-bottom ">
                        <button type="save " className="btn btn-contractor "><b style={{fontSize: 13}}> <i className="fa fa-search inner-head0" aria-hidden="true" />FIND A CONTRACTOR</b> </button>
                        </div>
                    </div>
                    </div>
                    <div className="inner-wraper ">
                    <div className="card-3 mt-5 ">
                        <div className="card-body ">
                        <h7 className="hd font-weight-bold ">Find Contractors best suited for <img src="images/error.png" className="image-fluid image-responsive image-1" id="menu-toggle" alt /><br />a specific position
                        </h7>
                        <p>If you haven't created any Position yet, <br /> or want tocreate a new one, <a className="hrf hrf2 font-weight-bold " href="# "><u>Click here</u></a></p>
                        </div>
                    </div>
                    <div className="card-3 mt-3 ">
                        <h6 className="hd1 font-weight-bold ml-2 mt-2 ">Credits Remaining</h6>
                        <div className="inner-center ">
                        <p className="hrr ml-2 ">200<b>(Buy more)</b></p>
                        <p className="txt-corner">1cr=1 <i className="fa fa-user usr " aria-hidden="true " />
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
  
        </>
    )
}

export default FindContractor
